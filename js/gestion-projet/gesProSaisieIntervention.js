"use strict";

/**
 * @author Yann BOYER
 */

/* ------------------------------  variables page saisie intervention ------------------------------ */


/** @type {object}  liste déroulante : sélection de la user story, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let currentUserStory = document.getElementById("currentUserStory");

/** @type {object}  liste déroulante : sélection de la date d'intervention, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let interventionDate = document.getElementById("interventionDate");

/** @type {object} champ de commmentaires : commentaire sur l'intervention, saisi par la secrétaire technique, concernant la création d'une nouvelle intervention. */
let comment = document.getElementById("comment");

/** @type {object} bouton de soummission du formulaire, utilisé par la secrétaire technique, concernant la création d'une nouvelle intervention. */
let submitForm = document.getElementById("submitForm");


/* ----------------------------------------  traitement ---------------------------------------- */

addOptionInScrollingMenu(dataProject, currentUserStory, 3);

submitForm.addEventListener('click', () => {
    /** @type {string} indique les caratères interdits, qui seront supprimés lors de l'envoi du formulaire. */
    let regex = /[<>{}]/gi;
    if (regex.test(comment.value) === true) {
        comment.value = comment.value.replace(regex, "");
    }
});


/* --------------------------------------  fonctions -------------------------------------- */

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