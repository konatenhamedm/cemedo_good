export class ArretMaladie {
    id:number
    commentaire:string
    dateEmission:string
    nbJours:string
    assure :{
        id:number
        user:{
            id:number,
            fullName:string
            nom:string 
          }
    }
    medecin :{
        id:number
        user:{
            id:number,
            fullName:string
            nom:string 
          }
    }
    createdAt:string
    updatedAt:string
    version:number
    active:number
    
    }
    