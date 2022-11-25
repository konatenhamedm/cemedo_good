import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Assurance } from 'src/app/_modeles/assurance/assurance';
import { Facture } from 'src/app/_modeles/facture/Facture';
import { ModePaiement } from 'src/app/_modeles/mode-paiement/modePaiement';
import { Ordonnance } from 'src/app/_modeles/ordonnance/Ordonnance';
import { Patient } from 'src/app/_modeles/patient/Patient';
import { AssuranceService } from 'src/app/_services/assurance/assurance.service';
import { FactureService } from 'src/app/_services/facture/facture.service';
import { ModePaiementService } from 'src/app/_services/mode-paiement/mode-paiement.service';
import { OrdonnanceService } from 'src/app/_services/ordonnance/ordonnance.service';
import { PatientService } from 'src/app/_services/patient/patient.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class FactureComponent implements OnInit {

  liste: Facture[] ;
    virtuelle: Facture[] ;
  liste_assure: Patient[] ;
  liste_ordonnance: Ordonnance[] ;
  liste_paiement: ModePaiement[] ;
  specialite: Facture;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: Facture[];
  submitted: boolean;
  selectAll: boolean = false;

  items: MenuItem[];
  home: MenuItem;
data_delete = Array();
  

  data_create = {
    id:null,
    dateEmission:"",
    montant:null,
    modePaiement:{
      id:null,
      libelle:""
  }, 
  ordonnance:{
    id:null,
    assure:{
        id:null,
        fullName:"",
        nom:"" 
    }
},
    assure:{
          id:null,
          user:{
            fullName:"",
        nom:""
          }
        
    },
    active:null,
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,
    private modePaiement : ModePaiementService,
    private patientService : PatientService,
    private service: FactureService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private ordonnanceService: OrdonnanceService
    ) { 

   // this.patientService.getListe().then(data => this.liste_assure = data);
  }
  ngOnInit() {
   
   
    this.ordonnanceService.getListe().then(data => this.liste_ordonnance = data);
    this.modePaiement.getListe().then(data => this.liste_paiement = data);
    this.patientService.getListe().then(data => this.liste_assure = data);
  console.log(this.liste);
  this.items = [
    {label: 'Facture'},
    {label: 'Liste des factures',routerLink:''},
   
];

this.home = {icon: 'pi pi-home'};
   
this.loading = true;
this.service.getListe().then(data => {
  this.liste = data.slice(0,6).filter(val => val.active == 0);
  this.totalRecords = this.liste.length;
  console.log(data.length);
}
 
 );
this.service.getListe().then(data => 
 {
   this.virtuelle = data.filter(val => val.active == 0)
   this.totalRecords = this.virtuelle.length;
   this.loading = false;
   console.log( this.virtuelle);
 }
 );

  }
  
  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
   //const filtres : LazyLoadEvent = event ? event:{first:0 , rows: 7, sortOrder:1, filters:{}}
    setTimeout(() => {
      if (this.virtuelle) {
        this.liste = this.virtuelle.slice(event.first,(event.first + event.rows));
        this.loading = false;
      }

      
    }, 1000);
}
  
onSelectAllChange(event) {
  const checked = event.checked;

  if (checked) {
      this.service.getListe().then(res => {
          this.selectedEntity = res;
          this.selectAll = true;
      });
  }
  else {
      this.selectedEntity = [];
      this.selectAll = false;
  }
}
  openNew() {
    this.specialite = this.data_create;
    this.submitted = false;
    this.entityDialog = true;
  }
  
  deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: ' Voulez vous réellement supprimer ces enregistrements ?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.liste = this.liste.filter(val => !this.selectedEntity.includes(val));
            this.selectedEntity.forEach(element => {
              this.data_delete.push(element.id)
          });
            this.selectedEntity = null;
            this.service.deleteSelectedProducts(this.data_delete).subscribe(response => {
              this.loading = true;
              setTimeout(() => {
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Enregistrement (s) effectué (s) avec succes', life: 3000});
                this.loading = false;
              }, 1000);
            });
           
            
          }
    });
  }
  editProduct(specialite: Facture) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: Facture) {
    this.confirmationService.confirm({
        message: ' Voulez vous réellement supprimer cet enregistrement ? ',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.liste = this.liste.filter(val => val.id !== specialite.id);
            this.specialite = {...specialite};
            this.service.delete(this.specialite.id).subscribe(response => {

              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                 this.messageService.add({severity:'success', summary: 'Succes', detail: 'Suppression effectuée avec success', life: 3000});
           
              }, 1000);
             
              });
          }
    });
  }
  
  hideDialog() {
    this.entityDialog = false;
    this.submitted = false;
  }
  
  saveProduct() {

    const data = {
      id:this.specialite.id,
      dateEmission:this.specialite.dateEmission,
      montant:this.specialite.montant,
      modePaiement:this.specialite.modePaiement.id,
      ordonnance:this.specialite.ordonnance.id,
      assure:this.specialite.assure.id
    }
    this.submitted = true;
  
   

    if (this.specialite.id) {
      this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
      
  this.service.update(data
  ).subscribe(
    response=>{
 
      this.loading = true;
      setTimeout(() => {
      
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Mise à jour effectuée avec success', life: 3000});
      
          this.loading = false;
        
  
        
      }, 1000);

    }
  )
    }
  else {
    //console.log(this.specialite);
     //this.specialite.id = this.createId();
     this.service.create(data).subscribe(
        response=>{
          this.loading = true;
        setTimeout(() => {
          this.loading = false;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Ajout effectué avec success', life: 3000});
 
        }, 1000);
        
        }
      );
      this.liste.push(this.specialite);

  
    }
  
        this.liste = [...this.liste];
        this.entityDialog = false;
        this.specialite = {...this.specialite};
    }
  
  
  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.liste.length; i++) {
        if (this.liste[i].id === id) {
            index = i;
            break;
        }
    }
  
    return index;
  }
  
  createId(): number {
    let id =1;
  
    return id;
  }
  
  
  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedEntity = value;
  }

}
