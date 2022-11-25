import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Medecin } from 'src/app/_modeles/medecin/Medecin';
import { Ordonnance } from 'src/app/_modeles/ordonnance/Ordonnance';
import { Patient } from 'src/app/_modeles/patient/Patient';
import { MedecinService } from 'src/app/_services/medecin/medecin.service';
import { OrdonnanceService } from 'src/app/_services/ordonnance/ordonnance.service';
import { PatientService } from 'src/app/_services/patient/patient.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class OrdonnanceComponent implements OnInit {

  liste: Ordonnance[] ;
    virtuelle: Ordonnance[] ;
  liste_assure: Patient[] ;
  liste_medecin: Medecin[] ;
  specialite: Ordonnance;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: Ordonnance[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  liste_status : any[];

  data_create = {
    id:null,
    dateEmission:null,
    livre:{
      libelle:""
    },
    user:{
      id:null,
      fullName:"",
    },
    medecin:{
        id:null,
        user:{
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

  items: MenuItem[];
  home: MenuItem;
data_delete = Array();
 

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,
    private patientService : PatientService,
    private service: OrdonnanceService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private medecinService: MedecinService
    ) { 

   // this.patientService.getListe().then(data => this.liste_assure = data);
  }
  ngOnInit() {
    this.items = [
    {label: 'Ordonnance'},
    {label: 'Liste des ordonnance',routerLink:''},
   
];

this.home = {icon: 'pi pi-home'};
   
    this.medecinService.getListe().then(data => this.liste_medecin = data);
    this.patientService.getListe().then(data => this.liste_assure = data);
    this.liste_status = [ {
    
      "libelle":'Livrer'
    },
    {
    
      "libelle":'Pas livrer'
    }]

     
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
  editProduct(specialite: Ordonnance) {
    this.specialite = {...specialite};
    console.log(this.specialite);
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: Ordonnance) {
    this.confirmationService.confirm({
        message: ' Voulez vous réellement supprimer cet enregistrement ? ' ,
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
      medecin:this.specialite.medecin.id,
      assure:this.specialite.user.id,
      livre:this.specialite.livre.libelle
    }
    this.submitted = true;
  
   
    if (this.specialite.id) {
      this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
      
  this.service.update(this.specialite.id,data
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
