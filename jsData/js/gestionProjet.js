"use strict";

/**
 * @author Yann BOYER
 */


/* ------------------------------  variables page gestion de projets ------------------------------ */

console.table(dataProject);

/* ------------------------------  traitement ------------------------------ */

/* -----  afficher le tableau des interventions des développeurs ----- */
/** @type {object} corps du tableau de la page HTML "gestionProjet"*/
let tab = document.getElementsByTagName("tbody")[0];
for (let index = 1; index < dataProject.length; index++) {
    let row = document.createElement("tr");
    let row2 = document.createElement("tr");
    let cellInfo = document.createElement("td");
    let infoId = (dataProject[0][0] + " : " + dataProject[index][0]);
    let infoScrumMaster = (dataProject[0][4] + " " + dataProject[index][4]);
    let textInCellInfo = document.createTextNode(infoId + " " + infoScrumMaster);
    for (let index2 = 0; index2 < 5; index2++) {
        let cell = document.createElement("td");
        let textInCell = "string";
        if (index2 === 0) {
            textInCell = document.createTextNode(dataProject[index][1]);
        } else if (index2 === 1) {
            textInCell = document.createTextNode(dataProject[index][2]);
        } else if (index2 === 2) {
            textInCell = document.createTextNode(dataProject[index][3]);
        } else if (index2 === 3) {
            textInCell = document.createTextNode(dataProject[index][5]);
        } else {
            textInCell = document.createTextNode(dataProject[index][11]);
        }
        cell.appendChild(textInCell);
        row.appendChild(cell);
    }   
    tab.appendChild(row);
    
    cellInfo.colSpan = "5";
    cellInfo.appendChild(textInCellInfo);
    row2.appendChild(cellInfo);
    tab.appendChild(row2);
    row2.style.display = "none";
    row.addEventListener('click',  () => {
        if (row2.style.display === "block") {
            row2.style.display = "none";
            row.style.backgroundColor = "inherit";
            row.style.color = "black";
        } else {
                    row2.style.display = "block";
                    
                    row.style.backgroundColor = "blueviolet";
                    row.style.color = "whitesmoke";

        }
    });
    row2.addEventListener('click', () => {
        row2.style.display = "none";
    });
    row2.style.backgroundColor = "blueviolet";
    row2.style.color = "whitesmoke";
}


let table = document.getElementById("tableOfInterventions");
let infoFor = document.getElementsByTagName("tr");
let moreDetail = document.getElementById("moreDetail");
console.log(infoFor);
console.log(infoFor.length);
/*  */
moreDetail.style.display = "none";
for (let index = 2; index < infoFor.length; index++) {

    
infoFor[index].addEventListener('click', () => {
        moreDetail.style.display = "block";
    })
}


moreDetail.addEventListener('click', () => {
    moreDetail.style.display = "none";
})

/* ------------------------------  fonctions ------------------------------ */

/**
 * @function allByView() 
 * @description fonction pour accéder à toutes les données du tableau généré par getElementsByClassName(), pour le paramètre / la variable utilisée par cette fonction.
 * @param {String} viewBy fait référence à variable/élément à afficher ou cacher.
 * @param {String} viewOrHidden fait référence au statut "affiché" ou "caché" désiré pour de l'élément.
 */
 function allByView(viewBy, viewOrHidden) {
    for (let index = 0; index < viewBy.length; index++) {
        viewBy[index].style.display = viewOrHidden;
    }
}
