"use strict";

/* ------------------------------  variables page gestion de projets ------------------------------ */



/* ------------------------------  traitement ------------------------------ */

/* -----  afficher le tableau des interventions des développeurs ----- */
/* 
    methode create element pour creer une ligne, puis une cellule
    methode createTextNode pour creer le texte dans la cellule
    methode appendChild pour attacher chaque enfant html a son parent (texte a la cellule, cellule a la rangée, rangée a tbody)

    selectionner le tbody
    creer toutes les cellules d'une rangée
        creer une rangée tr
        creer 5 cellules td
        creer le texte a mettre dans la cellule
        attacher le texte à la cellule
        attacher la cellule a la rangée
        attacher la rangée au tableau

*/

let tab = document.getElementsByTagName("tbody")[0];
console.log(tab);

for (let index = 1; index < dataProject.length; index++) {
    let row = document.createElement("tr");
    for (let index2 = 0; index2 < 5; index2++) {
        let cell = document.createElement("td");
        let textInCell = "string";
        if (index2 === 0) {
            textInCell = document.createTextNode(dataProject[index][1]);
            console.log(textInCell);

        } else if (index2 === 1) {
            textInCell = document.createTextNode(dataProject[index][2]);
            console.log(textInCell);

        } else if (index2 === 2) {
            textInCell = document.createTextNode(dataProject[index][3]);
            console.log(textInCell);

        } else if (index2 === 3) {
            textInCell = document.createTextNode(dataProject[index][5]);
            console.log(textInCell);

        } else {
            textInCell = document.createTextNode(dataProject[index][11]);
            console.log(textInCell);

        }
        cell.appendChild(textInCell);
        console.log(cell);
    
        row.appendChild(cell);
        console.log(row);

    }    
    tab.appendChild(row);
}



/* -----  transfert des données du formulaire vers une page test ----- */
/* 
1. écouter bouton d'envoi
2. recuperer les données de formulaire
3. envoi a la page test

*/


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


/**
 * @function regExOnComment()
 * @description fonction qui épure le contenu du texte saisi en commentaire pour ne pas pouvoir insérer de script. 
 * @param {String} stringToPurify fait référence à la chaine de caractère à épurer pour éviter l'insertion de script.
 */
function regExOnComment(stringToPurify) {
    return stringToPurify.replace(/[^a-z]/g, "OOO");
}
