"use strict";

/* ------------------------------  variables ------------------------------ */


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
let showInterventionsOf = document.getElementById("showInterventionsOf");

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


let test = document.getElementById("test");


let devQty = 0;

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



console.log(showInterventionsOf);
console.log(currentProject);
console.log(currentUserStory);
console.log(interventionDate);
console.log(comment);

console.log(collaborateurs)
console.log(collaborateurs[0]);
console.log(collaborateurs[0].fonctionCollabo);
test.innerText = collaborateurs[0].fonctionCollabo;
console.log(showInterventionsOf);
console.log(showInterventionsOf.value);
showInterventionsOf.value = collaborateurs[0].fonctionCollabo;


console.log(showInterventionsOf.querySelectorAll("option"));
console.log(showInterventionsOf.querySelectorAll("option")[1]);
console.log(showInterventionsOf.querySelectorAll("option")[1].value);
showInterventionsOf.querySelectorAll("option")[1].innerHTML = "test";


/* remplir le menu deroulant collaborateur */
/*
pour chaque collaborateur de 0 a la longueurdutableau-1
    acceder à l'objet collaborateur
    acceder à fonction collaborateur
    si fonctionCollabo === "développeur" alors
        remplir le selecteur avec prenomCollabo + nomCollabo
    fin de si
pour suivant

*/
for (let index = 0; index < collaborateurs.length; index++) {
    if (collaborateurs[index].fonctionCollabo === "Développeur") {
        let prenomNom = collaborateurs[index].prenomCollabo + " " + collaborateurs[index].nomCollabo;
        devQty += 1;
        let option = document.createElement("option");
        showInterventionsOf.appendChild(option).value = prenomNom;
        showInterventionsOf.querySelectorAll("option")[index].textContent = prenomNom;
    }
}
console.log(showInterventionsOf.querySelectorAll("option"));

/* comment remplir le selecteur
    acceder au champ option du selecteur
    ajouter un champ option au selecteur html
    ajouter le nom du collaborateur  
    trier le nom par rapport aux noms précedents en le deplaçant dans le DOM
*/


/* comment trier le nom dans le dom
    comparer la valeur de l'element/noeud à la valeur d'un élément précédent en utilisant le tri dichotomique
*/




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
