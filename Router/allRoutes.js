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
    new Route("/ajout-horaires", "ajout-horaires", "/pages/formulaires/admin/ajout-horaires.html"),
    new Route("/modifier-horaires", "modifier-horaires", "/pages/formulaires/admin/modifier-horaires.html"),
    new Route("/table-users", "table-users", "/pages/formulaires/admin/table-users.html"),
    new Route("/creation-user", "creation-user", "/pages/formulaires/admin/creation-user.html"),
    new Route("/modifier-user", "modifier-user", "/pages/formulaires/admin/modifier-user.html"),
    new Route("/ajout-service", "ajout-service", "/pages/formulaires/admin/ajout-service.html"),
    new Route("/modifier-service", "modifier-service", "/pages/formulaires/admin/modifier-service.html"),
    new Route("/ajout-habitat", "ajout-habitat", "/pages/formulaires/admin/ajout-habitat.html"),
    new Route("/modifier-habitat", "modifier-habitat", "/pages/formulaires/admin/modifier-habitat.html"),
    new Route("/ajout-animal", "ajout-animal", "/pages/formulaires/admin/ajout-animal.html"),
    new Route("/modifier-animal", "modifier-animal", "/pages/formulaires/admin/modifier-animal.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";