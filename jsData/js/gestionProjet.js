"use strict";

/**
 * @author Yann BOYER
 */


/* ------------------------------  variables page gestion de projets ------------------------------ */



/* ------------------------------  traitement ------------------------------ */

/* -----  afficher le tableau des interventions des développeurs ----- */
/** @type {object} corps du tableau de la page HTML "gestionProjet"*/
let tab = document.getElementsByTagName("tbody")[0];
for (let index = 1; index < dataProject.length; index++) {
    let row = document.createElement("tr");
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
}


/* 
tester le contenu de commentAboutintervention et remplacer les balises "<" et ">" par des espaces vides


regExOnComment(commentAboutIntervention);
console.log(commentAboutIntervention);

*/

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
