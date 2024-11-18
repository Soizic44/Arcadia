
//fonction de comparaison des données pour classer les valeurs
const compare = function(ids, asc){                 //fonction initial pour récupérer le contenu contextuel
    return function(row1, row2){
        const tdValue = function(row, ids){
            return row.children[ids].textContent;
        }
        const tri = function(v1, v2){               //comparaison des 2 valeurs textuelles
            if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)){  
                return v1 - v2;
            }
            else {
                return v1.toString().localeCompare(v2);
            }
            return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
        };
        return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
}

//fonction d'appel du tri au clic de la souris
const tbody = document.querySelector('tbody');
const thx = document.querySelectorAll('th');
const trxb = tbody.querySelectorAll('tr');
thx.forEach(function(th){
    th.addEventListener('click', function(){
        let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
        classe.forEach(function(tr){
            tbody.appendChild(tr)
        });
    })
});

//Filrer les animaux dans barre de recherche
function filtrer(){
    var filtre, tableau, ligne, cellule, i, texte
    filtre = document.getElementById("maRecherche").value.toUpperCase();
    tableau = document.getElementById("tableau");
    ligne = tableau.getElementsByTagName("tr");

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
//Filrer les dates dans barre de recherche
function filtrer1(){
    var filtre1, tableau, cellule, i, texte
    filtre1 = document.getElementById("maRechercheDate").value.toUpperCase();
    tableau = document.getElementById("tableau");
    ligne = tableau.getElementsByTagName("tr");

    for(i=0; i<ligne.length; i++){
        cellule = ligne[i].getElementsByTagName("td")[1];
        if(cellule){
            texte = cellule.innerText;
            if(texte.toLocaleUpperCase().indexOf(filtre1) > -1){
                ligne[i].style.display = "";
            }
            else{
                ligne[i].style.display = "none";
            }
        }
    }
}














