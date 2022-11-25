import { User } from "src/app/core/models/user"

export class ResponsableAssurance {
    active:number
    dateNaissance:string
    email:string
    assurance:{id:number,libelle:string}
    genre:{id:number,libelle:string}
    id:number
    login:string
    nom:string
    password:string
    prenoms:string
  
    tel:string
    tel2:string
    version:number
    user:{
        nom:string
        active:number
        dateNaissance:string
        email:string
        assurance:string
        genre:{
          id:number
          libelle:string
        }
        id:number
        login:string
        password:string
        prenoms:string
        role:{
          id:number,
          libelle:string
        }
        tel:string
        tel2:string
        version:number
    }
}
