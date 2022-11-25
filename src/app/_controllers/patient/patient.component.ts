import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Assurance } from 'src/app/_modeles/assurance/assurance';
import { Genre } from 'src/app/_modeles/genre/genre';
import { Patient } from 'src/app/_modeles/patient/Patient';
import { Role } from 'src/app/_modeles/role/role';
import { AssuranceService } from 'src/app/_services/assurance/assurance.service';
import { GenreService } from 'src/app/_services/genre/genre.service';
import { PatientService } from 'src/app/_services/patient/patient.service';
import { RoleService } from 'src/app/_services/role/role.service';
import { SpecialiteService } from 'src/app/_services/specialite/specialite.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  providers: [MessageService,ConfirmationService,DialogService]
})
export class PatientComponent implements OnInit {

 
  liste: Patient[] ;
    virtuelle: Patient[] ;
  specialite: Patient;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: Patient[];
  submitted: boolean;
  selectAll: boolean = false;
  liste_genre : Genre[];
  liste_role: Role[] ;
  liste_assurance: Assurance[] ;

  data_create = { 
    active:null,
    dateNaissance:null,
    email:"",
    genre:{
      id:null,
      libelle:""
    },
    assurance:{
      id:null,
      libelle:""
    },
    tauxCouverture:null,
    lieuHabitation:"",
    numeroAssure:"",
    profession:"",
    id:null,
    login:"",
    nom:"",
    password:"",
    prenoms:"",
    tel:"",
    tel2:"",
    version:null,
    user:{active:null,
      dateNaissance:null,
      email:"",
      assurance:"",
      genre:{
        id:null,
        libelle:""
      },
      id:null,
      lieuHabitation:"",
      tauxCouverture:null,
      login:"",
      nom:"",
      password:"",
      prenoms:"",
      role:{
        id:null,
        libelle:""
      },
      tel:"",
      tel2:"",
      version:null,}};

      items: MenuItem[];
      home: MenuItem;
data_delete = Array();
    
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialogService: DialogService,
    private assuranceService: AssuranceService,
    private roleService:RoleService,private service: PatientService,private genreService: GenreService ,private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit() {
  
      this.roleService.getListe().then(data => this.liste_role = data.filter(val => val.active == 0));
      this.assuranceService.getListe().then(data => this.liste_assurance = data.filter(val => val.active == 0));
      this.genreService.getListe().then(data => this.liste_genre = data.filter(val => val.active == 0));

      this.items = [
        {label: 'Patient'},
        {label: 'Liste des assures',routerLink:''},
       
    ];
    
    this.home = {icon: 'pi pi-home'};
       
this.loading = true;
this.service.getListe().then(data => {
  this.liste = data.slice(0,6).filter(val => val.active == 0);
  this.totalRecords = this.liste.length ;
  console.log(this.liste);
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
  editProduct(specialite: Patient) {
    this.specialite = {...specialite};
    this.entityDialog = true;
  }
  
  deleteProduct(specialite: Patient) {
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
  

    if(this.specialite.id){
    var data = {
    id:this.specialite.id,
    nom:this.specialite.user.nom,
                login:this.specialite.user.login,
                dateNaissance:this.specialite.user.dateNaissance,
                email:this.specialite.user.email,
                genre:this.specialite.user.genre.id,
                password:this.specialite.user.password,
                prenoms:this.specialite.user.prenoms,
                assurance:this.specialite.assurance.id,
                tel:this.specialite.user.tel,
                tel2:this.specialite.user.tel2,
                tauxCouverture:this.specialite.user.tauxCouverture,
                lieuHabitation:this.specialite.lieuHabitation,
                numeroAssure:this.specialite.numeroAssure,
                profession:this.specialite.profession,
  }
    }else{
  var data2 = {
    id:this.specialite.id,
    nom:this.specialite.user.nom,
                login:this.specialite.user.login,
                dateNaissance:this.specialite.user.dateNaissance,
                email:this.specialite.user.email,
                genre:this.specialite.genre.id,
                password:this.specialite.user.password,
                prenoms:this.specialite.user.prenoms,
               
                assurance:this.specialite.assurance.id,
                tel:this.specialite.user.tel,
                tel2:this.specialite.user.tel2,
                tauxCouverture:this.specialite.user.tauxCouverture,
                lieuHabitation:this.specialite.lieuHabitation,
                numeroAssure:this.specialite.numeroAssure,
                profession:this.specialite.profession,
  }
    }



  this.submitted = true;
   

  
    if (this.specialite.user.login.trim()) {
      
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
   
       this.service.create(data2).subscribe(
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
