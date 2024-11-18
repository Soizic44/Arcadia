//Filrer les animaux dans barre de recherche
function filtrer2(){
    var filtre, conso, ligne, cellule, i, texte
    filtre = document.getElementById("animaux").value.toUpperCase();
    conso = document.getElementById("conso");
    ligne = conso.getElementsByTagName("tr");

    for(i=0; i<ligne.length; i++){
        cellule = ligne[i].getElementsByTagName("td")[0];
        if(cellule){
            texte = cellule.innerText;
            if(texte.toLocaleUpperCase().indexOf(filtre) > -1){
                ligne[i].style.display = "";
            }
            else{
                ligne[i].style.display = "none";
            }
        }
    }
}