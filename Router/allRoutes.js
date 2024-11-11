import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/accueil.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/services", "services", "/pages/services.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";