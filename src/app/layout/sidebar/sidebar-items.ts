import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  

  // Admin Modules
  /*
{
        path: "/admin/dashboard/main",
        title: "Principal",
        //title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/dashboard/dashboard2",
        title: "MENUITEMS.DASHBOARD.LIST.DOCTOR-DASHBOARD",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/patient/dashboard",
        title: "MENUITEMS.DASHBOARD.LIST.PATIENT-DASHBOARD",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
  */
  {
    path: "/admin/dashboard/main",
    title: "Tableau de bord",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "tv",
    class: "",
    //class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin","Comptable"],
    submenu: [
      
    ],
  },


  // Common Modules admin
{
    path: "/admin/specialite/liste",
    title: "Département",
    moduleName: "extra-pages",
    iconType: "material-icons-two-tone",
    icon: "group_work",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  },

  {
    path: "/admin/medecin/liste",
    title: "Médecins",
    moduleName: "doctor",
    iconType: "material-icons-two-tone",
    icon: "route",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/liste",
        title: "Liste des médecins",
        moduleName: "Medecin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/arret-maladie/liste",
        title: "Liste des arrêts maladies",
        moduleName: "Medecin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/liste",
        title: "Historique des traitements",
        moduleName: "Medecin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    
      
    ],
  },
  {
    path: "/admin/patient/liste",
    title: "Patients",
    moduleName: "patient",
    iconType: "material-icons-two-tone",
    icon: "sick",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/patient/liste",
        title: "Liste des patients",
        moduleName: "Medecin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Paiements",
        moduleName: "Patient",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Cas Gérer",
        moduleName: "Patient",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Documents",
        moduleName: "Patient",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "/admin/rendez-vous/liste",
    title: "Rendez-vous",
    moduleName: "extra-pages",
    iconType: "material-icons-two-tone",
    icon: "calendar_month",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
     
      {
        path: "/admin/rendez-vous/liste",
        title: "Tout les rendez-vous",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/rendez-vous/today",
        title: "Aujourd'hui",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/rendez-vous/next",
        title: "Prochains",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/renez-vous/calendrier",
        title: "Calendrier",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "/admin/agora/listes",
    title: "Liste des appels",
    moduleName: "agora",
    iconType: "material-icons-two-tone",
    icon: "assured_workload",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  },
  //=============================================
  {
    path: "/admin/affection/liste",
    title: "Parametrage",
    moduleName: "Parametrage",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/assurance/liste",
        title: "Liste des assurances",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/statut-document/liste",
        title: "Liste des statuts document",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/parameters/liste",
        title: "Liste des parameters",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/document-identite/liste",
        title: "Liste des documents identités",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/affection/liste",
        title: "Liste des affections",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/genre/liste",
        title: "Liste des genres",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/role/liste",
        title: "Liste des roles",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/relation/liste",
        title: "Liste des relations",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/service/liste",
        title: "Liste des services",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/type-employe/liste",
        title: "Liste des types employé",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/type-fichier-medical/liste",
        title: "Liste des types fichiers medical",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/type-medecin/liste",
        title: "Liste des types medecins",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/type-service/liste",
        title: "Liste des types de service",
        moduleName: "",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
//=================================================

  {
    path: "/admin/infirmier/liste",
    title: "Ressources humaines",
    moduleName: "Rh",
    iconType: "material-icons-two-tone",
    icon: "people_outline",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/administrateur/liste",
        title: "Liste des administrateurs",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/infirmier/liste",
        title: "Liste des infirmiers",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/laboratin/liste",
        title: "Liste des laboratins",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/pharmacien/liste",
        title: "Liste des pharmaciens",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/gerant/liste",
        title: "Liste des gérants",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/comptable/liste",
        title: "Liste des comptables",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/responsable-assurance/liste",
        title: "Liste des responsables",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  {
    path: "/admin/facture/liste",
    title: "Finance",
    moduleName: "Fi",
    iconType: "material-icons-two-tone",
    icon: "monetization_on",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/facture/liste",
        title: "Liste des paiements",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/mode-paiement/liste",
        title: "Liste des modes de paiement",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Paiements provisoires",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Recouvrements dûs",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Procédures de paiements",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Catégories de paiements",
        moduleName: "Fi",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },

      {
        path: "/admin/medecin/rapport",
        title: "Dépenses",
        moduleName: "Depense",
        iconType: "material-icons-two-tone",
        icon: "calendar_month",
        class: "menu-toggle",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [
        
          {
            path: "/admin/medecin/rapport",
            title: "Liste des dépenses",
            moduleName: "Depense",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Catégories de dépenses",
            moduleName: "Depense",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
        ],
      },
    ],
  },

  {
    path: "/admin/ordonnance/liste",
    title: "Ordonnance",
    moduleName: "Ordonnance",
    iconType: "material-icons-two-tone",
    icon: "list_alt",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [],
  },
  {
    path: "#",
    title: "Tests de laboratoire",
    moduleName: "TL",
    iconType: "material-icons-two-tone",
    icon: "people_outline",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des tests",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapports laboratoire",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapports livraisons",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Macros",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
     /* {
        path: "/admin/medecin/rapport",
        title: "Comptable",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Responsable assurance",
        moduleName: "Rh",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },*/
    ],
  },

  {
    path: "#",
    title: "Hospitalisations et lits",
    moduleName: "HL",
    iconType: "material-icons-two-tone",
    icon: "hotel",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des hospitalisation",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Liste des lits",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Catégorie de lit",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      /*{
        path: "/admin/medecin/rapport",
        title: "Macros",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },*/
     
    ],
  },

  {
    path: "#",
    title: "Pharmacies",
    moduleName: "PH",
    iconType: "material-icons-two-tone",
    icon: "local_pharmacy",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Tableau de bord",
        moduleName: "PH",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Liste des ventes",
        moduleName: "PH",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Dépenses",
        moduleName: "PH",
        iconType: "material-icons-two-tone",
        icon: "",
        class: "menu-toggle",
        groupTitle: false,
        badge: "route",
        badgeClass: "",
        role: [""],
        submenu: [
          {
            path: "/admin/medecin/rapport",
            title: "Liste des dépenses",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Liste des catégories",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
        ],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapports",
        moduleName: "PH",
        iconType: "",
        icon: "",
        class: "menu-toggle",
        groupTitle: false,
        badge: "route",
        badgeClass: "",
        role: [""],
        submenu: [
          {
            path: "/admin/medecin/rapport",
            title: "Pharmacie rapport",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Ventes mensuelles",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Ventes quotidiennes",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Dépenses mensuelles",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
          {
            path: "/admin/medecin/rapport",
            title: "Dépenses quotidiennes",
            moduleName: "PH",
            iconType: "",
            icon: "",
            class: "ml-menu",
            groupTitle: false,
            badge: "",
            badgeClass: "",
            role: [""],
            submenu: [],
          },
        ],
      },
      /*{
        path: "/admin/medecin/rapport",
        title: "Macros",
        moduleName: "TL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },*/
     
    ],
  },

  {
    path: "/admin/medicament/liste",
    title: "Médicaments",
    moduleName: "Me",
    iconType: "material-icons-two-tone",
    icon: "local_hospital",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medicament/liste",
        title: "Liste des médicaments",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Liste des catégories médicaments",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medicament/liste",
        title: "Alerte stock médicament",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "#",
    title: "Donneur",
    moduleName: "donneur",
    iconType: "material-icons-two-tone",
    icon: "local_hospital",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des donneurs",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Banque de sang",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      
    ],
  },

  {
    path: "#",
    title: "Gestionnaire des fichiers",
    moduleName: "Gf",
    iconType: "material-icons-two-tone",
    icon: "attach_file",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des fichiers",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  
  {
    path: "#",
    title: "Raport",
    moduleName: "rapport",
    iconType: "material-icons-two-tone",
    icon: "show_chart",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Rapport financier",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Activité de l'utilisateur",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Commissions des médecins",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Ventes mensuelles",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Ventes quotidiennes",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Dépenses quotidiennes",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Dépenses mensuelles",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },

      {
        path: "/admin/medecin/rapport",
        title: "Révenu vs dépense",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapport de naissance",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapport d'exploitation",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Rapport d'expiration",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "#",
    title: "Avis",
    moduleName: "avis",
    iconType: "material-icons-two-tone",
    icon: "border_clear",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des avis",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "#",
    title: "Email",
    moduleName: "email",
    iconType: "material-icons-two-tone",
    icon: "email",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des emails",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  {
    path: "#",
    title: "SMS",
    moduleName: "sms",
    iconType: "material-icons-two-tone",
    icon: "sms",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des sms",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Modeles sms automatique",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Parametres sms",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "#",
    title: "Paie",
    moduleName: "paie",
    iconType: "material-icons-two-tone",
    icon: "attach_money",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Paies",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Salaires",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "#",
    title: "Présence",
    moduleName: "presence",
    iconType: "material-icons-two-tone",
    icon: "alarm_off",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
     
    ],
  },
  {
    path: "#",
    title: "Congés",
    moduleName: "conge",
    iconType: "material-icons-two-tone",
    icon: "alarm_off",
    class: "menu-top menu-toggle ng-star-inserted toggled",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/medecin/rapport",
        title: "Liste des congés",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/medecin/rapport",
        title: "Types de congé",
        moduleName: "HL",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  
  
];