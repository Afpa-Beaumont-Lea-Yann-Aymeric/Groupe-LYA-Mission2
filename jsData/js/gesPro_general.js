"use strict";

/* sur cette page se trouvent tous les éléments généraux aux diverses pages concernant la partir gestion de projets. */

/* ------------------------------  variables générales ------------------------------ */


/** @type {String} fonction de la personne connectée au sein de l'entreprise. */
let workAs = document.getElementById("workAs").innerText;

/** @type {object} définit les éléments visible pour tous les utilisateurs connectés. */
let viewByUser = document.getElementsByClassName("viewByUser"); 

/** @type {object} définit les éléments visibles pour les responsables des études. */
let viewByRespEd = document.getElementsByClassName("viewByRespEd");

/** @type {object} définit les éléments visibles pour les secrétaires techniques. */
let viewBySecTec = document.getElementsByClassName("viewBySecTec");

/** @type {object} définit les éléments visibles pour les développeurs. */
let viewByDev = document.getElementsByClassName("viewByDev");

/** @type {object} liste déroulante : sélection du collaborateur, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let interventionsOf = document.getElementById("interventionsOf");


let test = document.getElementById("test");


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

/* ---------- remplir le menu deroulant collaborateur ---------- */
/* présent sur page projet et saisie intervention */
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
let optionDevList = interventionsOf.querySelectorAll("option");

for (let index = 0; index < collaborateurs.length; index++) {
    if (collaborateurs[index].fonctionCollabo === "Développeur") {
        let option = document.createElement("option");
        let newDev = interventionsOf.appendChild(option);
        let developerName = collaborateurs[index].nomCollabo + " " + collaborateurs[index].prenomCollabo;

        newDev.innerText = developerName; // innerText pour ne pas echapper les balises html, comme ca , si qqn veut inserer des balises c'est inefficace et ca se voit
        newDev.value = developerName;

        console.log("n°" + index + " " + collaborateurs[index].nomCollabo);
        console.log(newDev);
        console.log(newDev.value);
        console.log(optionDevList[5]);

        console.log("--------------");
        if (newDev.value < interventionsOf.value ) {

            interventionsOf.insertBefore(newDev, interventionsOf.option);
        }



    }
    
}
console.log("--------------");
console.log(interventionsOf)

console.log(optionDevList);

console.log("--------------");


/* ------------------------------ fonctions ------------------------------ */

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