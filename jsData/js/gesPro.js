"use strict";

/* ------------------------------  variables ------------------------------ */


/** @param {String} workAs fonction de la personne connectée au sein de l'entreprise. */
let workAs = document.getElementById("workAs").innerText;

/** @param {String} viewByUser définit les éléments visible pour tous les utilisateurs connectés. */
let viewByUser = document.getElementsByClassName("viewByUser"); 

/** @param {String} viewByRespEd définit les éléments visibles pour les responsables des études. */
let viewByRespEd = document.getElementsByClassName("viewByRespEd");

/** @param {String} viewBySecTec définit les éléments visibles pour les secrétaires techniques. */
let viewBySecTec = document.getElementsByClassName("viewBySecTec");

/** @param {String} viewByDev définit les éléments visibles pour les développeurs. */
let viewByDev = document.getElementsByClassName("viewByDev");

/** @param {String} commentAboutIntervention commmentaires saisis par la secrétaire technique concernant l'intervention d'un collaborateur */
let commentAboutIntervention = document.getElementById("comment");



/* ------------------------------  traitement ------------------------------ */


/* -----  faire disparaitre des éléments du menu en fonction de la personne connectée ----- */

allByView(viewByUser, "none");
allByView(viewBySecTec, "none");
allByView(viewByRespEd, "none");
allByView(viewByDev, "none");


if (workAs === "Secrétaire technique") {
    console.log(workAs);
    allByView(viewByUser, "list-item");
    allByView(viewBySecTec, "list-item");
}

if (workAs === "Responsable des études") {
    console.log(workAs);
    allByView(viewByUser, "list-item");
    allByView(viewByRespEd, "list-item");
}

if (workAs === "Développeur") {
    console.log(workAs);
    allByView(viewByUser, "list-item");
    allByView(viewByDev, "list-item");
}

/* 
tester le contenu de commentAboutintervention et remplacer les balises "<" et ">" par des espaces vides


regExOnComment(commentAboutIntervention);
console.log(commentAboutIntervention);

*/

/* ------------------------------  fonctions ------------------------------ */

/**
 * @function allByView() fonction pour accès à toutes les données du tableau généré par getElementsByClassName()
 * @param {String} viewBy variable/élément à afficher ou cacher.
 * @param {String} viewOrHidden définit le statut "affiché" ou "caché" de l'élément.
 */
 function allByView(viewBy, viewOrHidden) {
    for (let index = 0; index < viewBy.length; index++) {
        viewBy[index].style.display = viewOrHidden;
    }
}


/**
 * @function regExOnComment()
 * @description fonction qui épure le contenu du texte saisi en commentaire pour ne pas pouvoir insérer de script. 
 * @param {String} stringToPurify correspond à la chaine de caractère à épurer pour éviter l'insertion de script.
 */
function regExOnComment(stringToPurify) {
    return stringToPurify.replace(/[^a-z]/g, "OOO");
}

