"use strict";

/**
 * @author Yann BOYER
 */

/* ------------------------------  variables page saisie intervention ------------------------------ */



/** @type {object}  liste déroulante : sélection du projet, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let currentProject = document.getElementById("currentProject");

/** @type {object}  liste déroulante : sélection de la user story, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let currentUserStory = document.getElementById("currentUserStory");

/** @type {object}  liste déroulante : sélection de la date d'intervention, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let interventionDate = document.getElementById("interventionDate");

/** @type {object} champ de commmentaires : commentaire sur l'intervention, saisi par la secrétaire technique, concernant la création d'une nouvelle intervention. */
let comment = document.getElementById("comment");

/** @type {object} bouton de soummission du formulaire, utilisé par la secrétaire technique, concernant la création d'une nouvelle intervention. */
let submitForm = document.getElementById("submitForm");



/**
 * @description affichage d'une alert pour visualisation des données envoyées lors des phases de développement.
 */
submitForm.addEventListener('click', () => {
    let regex = /[<>/{}]/gi;
    if (regex.test(comment.value) === true) {
        console.log("suppression des caratères interdits");
        comment.value = comment.value.replace(regex, "");
    }
    console.log(comment.value);
});


/* ------------------------------  traitement ------------------------------ */



/* -----  faire disparaitre des éléments du menu en fonction de la personne connectée ----- */

allByView(viewByUser, "none");
allByView(viewBySecTec, "none");
allByView(viewByRespEd, "none");
allByView(viewByDev, "none");


if (workAs === "Secrétaire technique") {
    allByView(viewByUser, "list-item");
    allByView(viewBySecTec, "list-item");
}

if (workAs === "Responsable des études") {
    allByView(viewByUser, "list-item");
    allByView(viewByRespEd, "list-item");
}

if (workAs === "Développeur") {
    allByView(viewByUser, "list-item");
    allByView(viewByDev, "list-item");
}


/* remplir le menu deroulant collaborateur */
/*
pour chaque collaborateur de 0 a la longueurdutableau-1
    acceder à l'objet collaborateur
    acceder à fonction collaborateur
    si fonctionCollabo === "développeur" alors
        remplir le selecteur avec prenomCollabo + nomCollabo
    fin de si
pour suivant

methode a utiliser :
createElement() pour creer un nouvel element a nommer "option"
append() ou appendChild() ajoute un noeud apres le dernier enfant

propritété à utiliser :
innerText

*/


/* -----  transfert des données du formulaire vers une page test ----- */
/* 
1. écouter bouton d'envoi
2. recuperer les données de formulaire
3. envoi a la page test

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

 /*
function regExOnComment(stringToPurify) {

    console.log(stringToPurify);
    
    let regex = /[<>/{}]/gi;
    let result = stringToPurify.replace(regex, " !!! caractère interdit !!! ");
    console.log(result);
    return result;
}
*/