import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { ConfigGeneral } from 'src/app/config/config.service';
import { DocumentIdentite } from 'src/app/_modeles/document-identite/documentIdentite';
import { StatutDocument } from 'src/app/_modeles/statut-document/statutDocument';
import { DocumentIdentiteService } from 'src/app/_services/document-identite/document-identite.service';
import { StatutDocumentService } from 'src/app/_services/statut-document/statut-document.service';

@Component({
  selector: 'app-document-identite',
  templateUrl: './document-identite.component.html',
  styleUrls: ['./document-identite.component.scss'],
  providers: [MessageService, ConfirmationService, DialogService]
})
export class DocumentIdentiteComponent implements OnInit {

  liste: DocumentIdentite[];
  virtuelle: DocumentIdentite[];
  specialite: DocumentIdentite;
  entityDialog: boolean;
  totalRecords: number;
  loading: boolean;
  selectedEntity: DocumentIdentite[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  data_create = {
    id: null,
    recto: {
      id: "",
      libelle: "",
      taille: null
    },
    verso: {
      id: "",
      libelle: "",
      taille: null

    },
    commentaire: "",
    statut: {

      id: null,
      code: null,
      libelle: ""

    },
    createdAt: "",
    updatedAt: "",
    version: null,
    active: null,

  };
  items: MenuItem[];
  home: MenuItem;
  data_delete = Array();
  liste_status: StatutDocument[];
    baseUrl = ConfigGeneral.BaseUrl.Url;

  @ViewChild('dt') dt: Table | undefined | any;
  constructor(public dialogService: DialogService, private statuService: StatutDocumentService, private service: DocumentIdentiteService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  ngOnInit() {
    this.statuService.getListe().then(data => this.liste_status = data.filter(val => val.active == 0));


    this.items = [
      { label: 'DocumentIdentite' },
      { label: 'Liste des document-identites', routerLink: '' },

    ];

    this.home = { icon: 'pi pi-home' };
    this.loading = true;
    this.service.getListe().then(data => {
      this.liste = data.slice(0, 6).filter(val => val.active == 0 && val.statut.code != 1);
      this.totalRecords = this.liste.length;
      console.log(data.length);
    }

    );
    this.service.getListe().then(data => {
      this.virtuelle = data.filter(val => val.active == 0  && val.statut.code != 1)
      this.totalRecords = this.virtuelle.length;
      this.loading = false;
      console.log(this.virtuelle);
    }
    );
  }
  onSelectAllChange(event) {
    const checked = event.checked;

    if (checked) {
      this.service.getListe().then(res => {
        this.selectedEntity = res.filter(val=> val.active == 0  && val.statut.code != 1);
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
        this.liste = this.virtuelle.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }


    }, 1000);
  }

  openNew() {
    this.specialite = this.data_create;
    this.submitted = false;
    this.entityDialog = true;
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getEventValue($event: any): string {
    console.log($event.target.value);
    return $event.target.value;
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

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Enregistrement (s) effectué (s) avec succes', life: 3000 });
            this.loading = false;
          }, 1000);
        });


      }
    });
  }
  editProduct(specialite: DocumentIdentite) {
    this.specialite = { ...specialite };
    this.entityDialog = true;
  }

  statut(specialite: DocumentIdentite) {
    this.confirmationService.confirm({
      message: ' Voulez vous réellement valider ce document ? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.liste = this.liste.filter(val => val.id !== specialite.id);
        this.specialite = { ...specialite };
        this.service.delete(this.specialite.id).subscribe(response => {

          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.messageService.add({ severity: 'success', summary: 'Succes', detail: 'Suppression effectuée avec success', life: 3000 });

          }, 1000);

        });
      }
    });
  }

  deleteProduct(specialite: DocumentIdentite) {
    this.confirmationService.confirm({
      message: ' Voulez vous réellement supprimer cet enregistrement ? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.liste = this.liste.filter(val => val.id !== specialite.id);
        this.specialite = { ...specialite };
        this.service.delete(this.specialite.id).subscribe(response => {

          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.messageService.add({ severity: 'success', summary: 'Succes', detail: 'Suppression effectuée avec success', life: 3000 });

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

      document: this.specialite.id,
      commentaire: this.specialite.commentaire,
      statut: this.specialite.statut.id,

    }


    if (this.specialite.id) {
      this.liste[this.findIndexById(this.specialite.id)] = this.specialite;
      console.log(data);
      this.service.changeState(data
      ).subscribe(
        response => {

          this.loading = true;
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Mise à jour effectuée avec success', life: 3000 });

            this.loading = false;
            if(this.specialite.statut.code == 1){
              this.liste = this.liste.filter(val => val.id !== this.specialite.id);
            this.specialite = {...this.specialite};
            }
            

          }, 1000);

        }
      )
    }

    this.liste = [...this.liste];
    this.entityDialog = false;
    this.specialite = { ...this.specialite };

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
    let id = 1;

    return id;
  }


  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedEntity = value;
  }
}
