import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Assurance } from 'src/app/_modeles/assurance/assurance';
import { AssuranceService } from 'src/app/_services/assurance/assurance.service';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class AssuranceComponent implements OnInit {
 
  liste: Assurance[] ;
    virtuelle: Assurance[] ;
  specialite: Assurance;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: Assurance[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];

  data_create = {
    id:null,
    libelle:"",
    email:"",
    tel:"",
    ville:"",
    createdAt:"",
    updatedAt:"",
    version:null,
    active:null,
    
   };
   items: MenuItem[];
   home: MenuItem;
data_delete = Array();
  
 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,private service: AssuranceService,private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit() {
     this.items = [
     {label: 'Assurance'},
     {label: 'Liste des assurances',routerLink:''},
    
 ];
 
 this.home = {icon: 'pi pi-home'};
    this.cols = [
    { field: "id", header: "Identifiant" },
    { field: "libelle", header: "Libelle" },
    ];
   
   
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
  
  editProduct(specialite: Assurance) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: Assurance) {
    this.confirmationService.confirm({
        message: ' Voulez vous réellement supprimer cet enregistrement ? '  ,
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
    libelle:this.specialite.libelle,
    email:this.specialite.email,
    tel:this.specialite.tel,
    ville:this.specialite.ville,
  }
    if (this.specialite.libelle.trim()) {
        if (this.specialite.id) {
            this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
            
        this.service.update(this.specialite.id,data
        ).subscribe(
          response=>{
            this.loading = true;
              setTimeout(() => {
                this.loading = false;
                   this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          
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
                 this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
       
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
