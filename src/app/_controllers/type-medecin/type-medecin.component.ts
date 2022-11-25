import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TypeMedecin } from 'src/app/_modeles/type-medecin/typeMedecin';
import { TypeMedecinService } from 'src/app/_services/type-medecin/type-medecin.service';

@Component({
  selector: 'app-type-medecin',
  templateUrl: './type-medecin.component.html',
  styleUrls: ['./type-medecin.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class TypeMedecinComponent implements OnInit {
 
  liste: TypeMedecin[] ;
   virtuelle: TypeMedecin[] ;
  specialite: TypeMedecin;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: TypeMedecin[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  data_create = {
    id:null,
    libelle:"",
    createdAt:"",
    updatedAt:"",
    version:null,
    active:null,
    
   };
   items: MenuItem[];
   home: MenuItem;
data_delete = Array();
  
 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,private service: TypeMedecinService,private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit() {
 this.items = [
     {label: 'Type médecin'},
     {label: 'Liste des types médecin',routerLink:''},
    
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
  editProduct(specialite: TypeMedecin) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: TypeMedecin) {
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
    libelle:this.specialite.libelle
   
  }
    if (this.specialite.libelle.trim()) {
       
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
