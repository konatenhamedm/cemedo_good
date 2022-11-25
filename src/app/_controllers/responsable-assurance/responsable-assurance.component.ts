import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ResponsableAssurance } from 'src/app/_modeles/responsable-assurance/ResponsableAssurance';
import { Assurance } from 'src/app/_modeles/assurance/assurance';
import { Role } from 'src/app/_modeles/role/role';
import { ResponsableAssuranceService } from 'src/app/_services/responsable-assurance/responsable-assurance.service';
import { AssuranceService } from 'src/app/_services/assurance/assurance.service';
import { RoleService } from 'src/app/_services/role/role.service';
import { Genre } from 'src/app/_modeles/genre/genre';
import { GenreService } from 'src/app/_services/genre/genre.service';


@Component({
  selector: 'app-responsable-assurance',
  templateUrl: './responsable-assurance.component.html',
  styleUrls: ['./responsable-assurance.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class ResponsableAssuranceComponent implements OnInit {

  liste: ResponsableAssurance[] ;
   virtuelle: ResponsableAssurance[] ;
  liste_assurance: Assurance[] ;
  liste_role: Role[] ;
  liste_genre: Genre[] ;
  specialite: ResponsableAssurance;
  show : boolean = true;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: ResponsableAssurance[];
  assurance: string;
  submitted: boolean = false;
  selectAll: boolean = false;
  cols: any[] = [];


  data_create = { active:null,
    dateNaissance:"",
    email:"",
    assurance:{
      id:null,
      libelle:""
    },
    genre:{
      id:null,
      libelle:""
    },
    id:null,
    login:"",
    nom:"",
    password:"",
    prenoms:"",
    tel:"",
    tel2:"",
    version:null,
    user:{active:null,
      dateNaissance:"",
      email:"",
      assurance:"",
      role:{
        id:null,
        libelle:""
      },
      genre:{
        id:null,
        libelle:""
      },
      id:null,
      login:"",
      nom:"",
      password:"",
      prenoms:"",
     
      tel:"",
      tel2:"",
      version:null,}};
      items: MenuItem[];
      home: MenuItem;
data_delete = Array();
     

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,private genreService: GenreService ,private roleService:RoleService, private assuranceService : AssuranceService,private service: ResponsableAssuranceService,private messageService: MessageService, private confirmationService: ConfirmationService) {

  
   }
  ngOnInit() {
 this.items = [
        {label: 'Responsable assurance'},
        {label: 'Liste des responsables',routerLink:''},
       
    ];
    
    this.home = {icon: 'pi pi-home'};
    
    this.assuranceService.getListe().then(data => this.liste_assurance = data);
    this.genreService.getListe().then(data => this.liste_genre = data.filter(val => val.active == 0));
    this.roleService.getListe().then(data => this.liste_role = data.filter(val => val.active == 0));
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
        this.service.getCustomers().then(res => {
            this.selectedEntity = res.data;
            this.selectAll = true;
        });
    }
    else {
        this.selectedEntity = [];
        this.selectAll = false;
    }
}

openNew() {
    this.specialite = this.data_create, 
    this.submitted = false;
    this.entityDialog = true;
  }
     detailProduct(specialite: ResponsableAssurance) {
    this.show = true;
    console.log(specialite.user.nom);
    this.specialite = {...specialite};
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
  editProduct(specialite: ResponsableAssurance) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: ResponsableAssurance) {
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
    if(this.specialite.id){
  var data = {
    nom:this.specialite.user.nom,
               login:this.specialite.user.login,
                dateNaissance:this.specialite.user.dateNaissance,
                email:this.specialite.user.email,
                assurance:this.specialite.assurance.id,
                genre:this.specialite.user.genre.id,
                password:this.specialite.user.password,
                prenoms:this.specialite.user.prenoms,
               
                tel:this.specialite.user.tel,
                tel2:this.specialite.user.tel2,
  }
    }else{
  var data2 = {
    nom:this.specialite.user.nom,
               login:this.specialite.user.login,
                dateNaissance:this.specialite.user.dateNaissance,
                email:this.specialite.user.email,
                assurance:this.specialite.assurance.id,
                genre:this.specialite.genre.id,
                password:this.specialite.user.password,
                prenoms:this.specialite.user.prenoms,
               
                tel:this.specialite.user.tel,
                tel2:this.specialite.user.tel2,
  }
    }


    if (this.specialite.user.login.trim()) {
        
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