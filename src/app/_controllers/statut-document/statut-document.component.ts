import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { StatutDocument } from 'src/app/_modeles/statut-document/statutDocument';
import { StatutDocumentService } from 'src/app/_services/statut-document/statut-document.service';

@Component({
  selector: 'app-statut-document',
  templateUrl: './statut-document.component.html',
  styleUrls: ['./statut-document.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class StatutDocumentComponent implements OnInit {

  liste: StatutDocument[] ;
    virtuelle: StatutDocument[] ;
  specialite: StatutDocument;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: StatutDocument[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  data_create = {
    id:null,
    libelle:"",
    code:null,
    createdAt:"",
    updatedAt:"",
    version:null,
    active:null,
    
   };

   items: MenuItem[];
   home: MenuItem;
data_delete = Array();
   
 
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,private service: StatutDocumentService,private messageService: MessageService, private confirmationService: ConfirmationService) { }
 
  ngOnInit() {
    this.items = [
        {label: 'StatutDocument'},
        {label: 'Liste des statut-documents',routerLink:''},
        
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
        message: ' Voulez vous r??ellement supprimer ces enregistrements ?',
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
                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Enregistrement (s) effectu?? (s) avec succes', life: 3000});
                this.loading = false;
              }, 1000);
            });
           
            
          }
    });
  }
  editProduct(specialite: StatutDocument) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: StatutDocument) {
    this.confirmationService.confirm({
        message: ' Voulez vous r??ellement supprimer cet enregistrement ? ' ,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.liste = this.liste.filter(val => val.id !== specialite.id);
            this.specialite = {...specialite};
            this.service.delete(this.specialite.id).subscribe(response => {
              this.loading = true;
              setTimeout(() => {
                this.loading = false;
                 this.messageService.add({severity:'success', summary: 'Succes', detail: 'Suppression effectu??e avec success', life: 3000});
           
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
    libelle:this.specialite.libelle,
    code:this.specialite.code,
   
  }
    if (this.specialite.libelle.trim()) {
        if (this.specialite.id) {
            this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
            console.log(this.liste[this.findIndexById(this.specialite.id)]);
        this.service.update(this.specialite.id,data
        ).subscribe(
          response=>{
            this.loading = true;
              setTimeout(() => {
                this.loading = false;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Enregistrement (s) effectu?? (s) avec succes', life: 3000});
         
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
                  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Ajout effectu?? avec success', life: 3000});
       
              }, 1000);
              
              }
            );
            this.liste.push(this.specialite);

        
          }
  
        this.liste = [...this.liste];
        this.entityDialog = false;
        this.specialite = {...this.specialite};
    }
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
