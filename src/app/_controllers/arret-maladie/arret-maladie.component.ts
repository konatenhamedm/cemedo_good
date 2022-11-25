import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ArretMaladie } from 'src/app/_modeles/arret-maladie/arretMaladie';
import { Patient } from 'src/app/_modeles/patient/Patient';
import { ArretMaladieService } from 'src/app/_services/arret-maladie/arret-maladie.service';
import { PatientService } from 'src/app/_services/patient/patient.service';

@Component({
  selector: 'app-arret-maladie',
  templateUrl: './arret-maladie.component.html',
  styleUrls: ['./arret-maladie.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class ArretMaladieComponent implements OnInit {

 
  liste: ArretMaladie[] ;
    virtuelle: ArretMaladie[] ;
  specialite: ArretMaladie;
  entityDialog: boolean;
  totalRecords: number;
  liste_assure: Patient[] ;
  loading: boolean;
  selectedEntity: ArretMaladie[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  data_create = {
    id:null,
    commentaire:"",
    dateEmission:"",
    nbJours:"",
    assure :{
        id:null,
        user:{
          id:null,
            fullName:"",
            nom:"", 
          }
    },
    medecin :{
        id:null,
        user:{
          id:null,
            fullName:"",
            nom:"", 
          }
    },
    createdAt:"",
    updatedAt:"",
    version:null,
    active:null,
    
   };

   items: MenuItem[];
   home: MenuItem;
data_delete = Array();
   
 
  
  
 
  constructor(public dialogService: DialogService,private patientService : PatientService, private service: ArretMaladieService,private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit() {
    this.items = [
        {label: 'Arret Maladie'},
        {label: 'Liste des arrêts maladies',routerLink:''},
        
    ];
 
 this.home = {icon: 'pi pi-home'};
 this.patientService.getListe().then(data =>{
  this.liste_assure = data.filter(val=> val.active == 0);
  console.log("ASURREEEEE",this.liste_assure);
  console.log("ASURREEEE555E",this.specialite);
 } )
 this.loading = true;

 this.service.getListe().then(data => {
   this.liste = data.slice(0,6).filter(val => val.active == 0 );
   this.totalRecords = this.liste.length;
   //console.log(data.length);
 }
  
  );
 this.service.getListe().then(data => 
  {
    this.virtuelle = data.filter(val => val.active == 0)
    this.totalRecords = this.virtuelle.length;
    this.loading = false;
   // console.log( this.virtuelle);
  }
  );
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
  editProduct(specialite: ArretMaladie) {
    this.specialite = {...specialite};
    console.log(specialite)
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: ArretMaladie) {
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
    this.submitted = true;
  const data = {
    id:this.specialite.id,
    commentaire:this.specialite.commentaire,
    dateEmission:this.specialite.dateEmission,
    assure:this.specialite.assure.user.id,
    medecin:52,
    nbJours:this.specialite.nbJours,
   
  }
  
    
        if (this.specialite.id) {
            this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
            console.log(this.liste[this.findIndexById(this.specialite.id)]);
        this.service.update(data
        ).subscribe(
          response=>{
            this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Enregistrement (s) effectué (s) avec succes', life: 3000});
                console.log('hhhhhhhhhhhhhhhhhhhh',this.specialite.assure.user.id);
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
                  console.log('hhhhhhhhhhhhhhhhhhhh',this.specialite.assure.user.id);
                  console.log('ddddddddddddddd',this.specialite.assure.user.fullName);
                  console.log('zzzzz',this.specialite);
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
