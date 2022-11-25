export const agora = {
    production: false,
    agora: {
      appId: '007eJxTYMj9UsT9/NyUntnLXZwaDNcJb/q2gON1/q1XF39vV7FLFRZVYEgzskw0M0tNNjVPNTQxNktLNEgyTzUwMrVIMjZOskg0l9WWSp5bI518RuENCyMDIwMLEIP4TGCSGUyygEk2huTU3NSUfAYGAJXpJug='
      
    }
  };

  export class Agora {
    id:number
    dateDebut:string
    dateFin:string
    employeTraitant :{
      id:number,
      user:{
        id:string
          fullName:string,
          nom:string, 
        }
  }
  assure :{
    id:number,
    user:{
      id:string
      ,dateNaissance:string,
        fullName:string,
        nom:string, 
      }
}
  gerant :{
    id:number,
    user:{
      id:number
        fullName:string,
        nom:string, 
      }
}
    createdAt:string
    updatedAt:string
    version:number
    active:number
   
    }

    export class Conso {
      id:number
      dateDebut:string
      dateFin:string
      employeTraitant :{
        id:number,
        user:{
          id:string
            fullName:string,
            nom:string, 
          }
    }
    assure :{
      id:number,
      user:{
        id:string
        ,dateNaissance:string,
          fullName:string,
          nom:string, 
        }
  }
    gerant :{
      id:number,
      user:{
        id:number
          fullName:string,
          nom:string, 
        }
  }
      createdAt:string
      updatedAt:string
      version:number
      active:number
     
      }
    