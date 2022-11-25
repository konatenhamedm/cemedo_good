import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class GeneraleService {

entityDialog: boolean;
totalRecords: number;
loading: boolean;
submitted: boolean;
selectAll: boolean = false;

constructor() { }
  

openNew(data:any,element:any) {
  element = data;
  this.submitted = false;
  this.entityDialog = true;
}


editProduct(specialite: any,element:any) {
  element = {...specialite};
  this.entityDialog = true;
}


  

hideDialog() {
  this.entityDialog = false;
  this.submitted = false;
}

}
