import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/accueil.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/services", "services", "/pages/services.html"),
    new Route("/contact", "contact", "/pages/contact.html"),
    new Route("/savane", "savane", "/pages/habitats/savane.html"),
    new Route("/jungle", "jungle", "/pages/habitats/jungle.html"),
    new Route("/marais", "marais", "/pages/habitats/marais.html"),
    new Route("/dumbo", "dumbo", "/pages/habitats/savane/dumbo.html"),
    new Route("/nala", "nala", "/pages/habitats/savane/nala.html"),
    new Route("/suri", "suri", "/pages/habitats/jungle/suri.html"),
    new Route("/tigrou", "tigrou", "/pages/habitats/jungle/tigrou.html"),
    new Route("/brutus", "brutus", "/pages/habitats/marais/brutus.html"),
    new Route("/beshte", "beshte", "/pages/habitats/marais/beshte.html"),
    new Route("/connexion", "connexion", "/pages/authentif/connexion.html"),
    new Route("/modifier-mp", "modifier-mp", "/pages/authentif/modifier-mp.html"),
    new Route("/mon-compte", "Mon compte", "/pages/formulaires/mon-compte.html"),
    new Route("/ajout-horaires", "ajout-horaires", "/pages/formulaires/admin/horaires/ajout-horaires.html"),
    new Route("/modifier-horaires", "modifier-horaires", "/pages/formulaires/admin/horaires/modifier-horaires.html"),
    new Route("/table-users", "table-users", "/pages/formulaires/admin/users/table-users.html"),
    new Route("/creation-user", "creation-user", "/pages/formulaires/admin/users/creation-user.html"),
    new Route("/modifier-user", "modifier-user", "/pages/formulaires/admin/users/modifier-user.html"),
    new Route("/ajout-service", "ajout-service", "/pages/formulaires/admin/service/ajout-service.html"),
    new Route("/modifier-service", "modifier-service", "/pages/formulaires/admin/service/modifier-service.html"),
    new Route("/ajout-habitat", "ajout-habitat", "/pages/formulaires/admin/habitat/ajout-habitat.html"),
    new Route("/modifier-habitat", "modifier-habitat", "/pages/formulaires/admin/habitat/modifier-habitat.html"),
    new Route("/ajout-animal", "ajout-animal", "/pages/formulaires/admin/animal/ajout-animal.html"),
    new Route("/modifier-animal", "modifier-animal", "/pages/formulaires/admin/animal/modifier-animal.html"),
    new Route("/comment-habitat", "comment-habitat", "/pages/formulaires/veterinaire/comment-habitat.html"),
    new Route("/cpte-rendus", "cpte-rendus", "/pages/formulaires/veterinaire/cpte-rendus.html"),
    new Route("/creation-cpte-rendus", "creation-cpte-rendus", "/pages/formulaires/veterinaire/creation-cpte-rendus.html"),
    new Route("/table-conso-animal", "table-conso-animal", "/pages/formulaires/employe/table-conso-animal.html"),
    new Route("/repas-animal", "repas-animal", "/pages/formulaires/employe/repas-animal.html"),
    new Route("/tableau-recap-avis", "tableau-recap-avis", "/pages/formulaires/employe/tableau-recap-avis.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";