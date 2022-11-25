import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";

export  abstract class Service {
    
    
entityDialog: boolean;
totalRecords: number;
loading: boolean;
submitted: boolean;
selectAll: boolean = false;
liste_genre : any[];



 public openNew(data:any,element:any) {
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