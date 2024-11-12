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
    new Route("/connexion", "connexion", "/pages/connexion.html"),
    new Route("/creation-compte", "creation-compte", "/pages/creation-compte.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";