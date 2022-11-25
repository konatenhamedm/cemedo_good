import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureComponent } from "./composents/facture/facture.component";

const routes: Routes = [
 {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'facture',component:FactureComponent
  },
  
 /* {
    path: 'medecin',
    loadChildren: () =>
      import('../doctor/doctor.module').then((m) => m.DoctorModule),
  }, */
  
  
  {
    path: 'specialite',
    loadChildren: () => import('../_controllers/specialite/specialite.module').then((r) => r.SpecialiteModule)
  },
  {
    path: 'statut-document',
    loadChildren: () => import('../_controllers/statut-document/statut-document.module').then((r) => r.StatutDocumentModule)
  },
  {
    path: 'parameters',
    loadChildren: () => import('../_controllers/parameters/parameters.module').then((r) => r.ParametersModule)
  },
  {
    path: 'arret-maladie',
    loadChildren: () => import('../_controllers/arret-maladie/arret-maladie.module').then((r) => r.ArretMaladieModule)
  },
  {
    path: 'document-identite',
    loadChildren: () => import('../_controllers/document-identite/document-identite.module').then((r) => r.DocumentIdentiteModule)
  },
  {
    path: 'service',
    loadChildren: () => import('../_controllers/service/service.module').then((r) => r.ServiceModule)
  },
  {
    path: 'agora',
    loadChildren: () => import('../_controllers/agora/agora.module').then((r) => r.AgoraModule)
  },
  {
    path: 'type-employe',
    loadChildren: () => import('../_controllers/type-employe/type-employe.module').then((r) => r.TypeEmployeModule)
  }
  ,
  {
    path: 'type-medecin',
    loadChildren: () => import('../_controllers/type-medecin/type-medecin.module').then((r) => r.TypeMedecinModule)
  }
  ,
  {
    path: 'genre',
    loadChildren: () => import('../_controllers/genre/genre.module').then((r) => r.GenreModule)
  }
  ,
  {
    path: 'type-service',
    loadChildren: () => import('../_controllers/type-service/type-service.module').then((r) => r.TypeServiceModule)
  },
  {
    path: 'assurance',
    loadChildren: () =>
      import('../_controllers/assurance/assurance.module').then((m) => m.AssuranceModule),
  },
  {
    path: 'comptable',
   
    loadChildren: () =>
      import('../_controllers/comptable/comptable.module').then(
        (m) => m.ComptableModule
      ),
  },
  {
    path: 'infirmier',
   
    loadChildren: () =>
      import('../_controllers/infirmier/infirmier.module').then(
        (m) => m.InfirmierModule
      ),
  },
  {
    path: 'fichier',
   
    loadChildren: () =>
      import('../_controllers/fichier/fichier.module').then(
        (m) => m.FichierModule
      ),
  },
  {
    path: 'gerant',
  
    loadChildren: () =>
      import('../_controllers/gerant/gerant.module').then(
        (m) => m.GerantModule
      ),
  },
  {
    path: 'medecin',
   
    loadChildren: () =>
      import('../_controllers/medecin/medecin.module').then(
        (m) => m.MedecinModule
      ),
  },
  {
    path: 'medicament',
   
    loadChildren: () =>
      import('../_controllers/medicament/medicament.module').then(
        (m) => m.MedicamentModule
      ),
  },
  {
    path: 'medicament',
   
    loadChildren: () =>
      import('../_controllers/medicament/medicament.module').then(
        (m) => m.MedicamentModule
      ),
  },
  {
    path: 'mode-paiement',
   
    loadChildren: () =>
      import('../_controllers/mode-paiement/mode-paiement.module').then(
        (m) => m.ModePaiementModule
      ),
  },
  {
    path: 'patient',
   
    loadChildren: () =>
      import('../_controllers/patient/patient.module').then(
        (m) => m.PatientModule
      ),
  },
  {
    path: 'pharmacien',
   
    loadChildren: () =>
      import('../_controllers/pharmacien/pharmacien.module').then(
        (m) => m.PharmacienModule
      ),
  },
  {
    path: 'relation',
   
    loadChildren: () =>
      import('../_controllers/relation/relation.module').then(
        (m) => m.RelationModule
      ),
  },
  
  {
    path: 'responsable-assurance',
   
    loadChildren: () =>
      import('../_controllers/responsable-assurance/responsable-assurance.module').then(
        (m) => m.ResponsableAssuranceModule
      ),
  },
  
  {
    path: 'type-fichier-medical',
   
    loadChildren: () =>
      import('../_controllers/type-fichier-medical/type-fichier-medical.module').then(
        (m) => m.TypeFichierMedicalModule
      ),
  },
  
  {
    path: 'role',
   
    loadChildren: () =>
      import('../_controllers/role/role.module').then(
        (m) => m.RoleModule
      ),
  },

  {
    path: 'administrateur',
  
    loadChildren: () =>
      import('../_controllers/administrateur/administrateur.module').then(
        (m) => m.AdministrateurModule
      ),
  },
  {
    path: 'ordonnance',
   
    loadChildren: () =>
      import('../_controllers/ordonnance/ordonnance.module').then(
        (m) => m.OrdonnanceModule
      ),
  },
  {
    path: 'rendez-vous',
    
    loadChildren: () =>
      import('../_controllers/rendez-vous/rendez-vous.module').then(
        (m) => m.RendezVousModule
      ),
  },
  {
    path: 'affection',
   
    loadChildren: () =>
      import('../_controllers/affection/affection.module').then(
        (m) => m.AffectionModule
      ),
  },
  {
    path: 'facture',
    loadChildren: () =>
      import('../_controllers/facture/facture.module').then(
        (m) => m.FactureModule
      ),
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
