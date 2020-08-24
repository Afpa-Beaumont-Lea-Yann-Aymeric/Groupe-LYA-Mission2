"use strict";

/* ------------------------------  variables page gestion de projets ------------------------------ */



/* ------------------------------  traitement ------------------------------ */




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
