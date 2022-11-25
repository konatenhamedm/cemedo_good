export class Facture{
    id:number
    dateEmission:string
    montant:number
    modePaiement:{
        id:number,
        libelle:string
    }
    ordonnance:{
        id:number,
        assure:{
            id:number,
            fullName:string
            nom:string 
        }
    }
    assure:{
            id:number,
            user:{
              fullName:string
              nom:string 
            }
       
    }
    active:number
  
}