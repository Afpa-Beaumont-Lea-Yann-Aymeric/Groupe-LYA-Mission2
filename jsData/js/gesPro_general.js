"use strict";

/**
 * @author Yann BOYER
 */


/* sur cette page se trouvent tous les éléments généraux/tranversaux aux diverses pages concernant la partie gestion de projets. */

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

/* ---------------------------------------- simulation de base de données Projets ABI ---------------------------------------- */
let dataProject = [["ID",	"Nom du projet",	"Client",	"User Story",	"Scrum Master",	"Développeur",	"Responsable des études",	"Commercial",	"Technicien support",	"Technico-commercial",	"Secrétaire",	"Sprint",	"Commentaire"]];
let listOfProjectsAndClients = [["Nom du projet", "Client", "Scrum Master", "Développeur", "Responsable des études", "Commercial", "Technicien support", "Technico-commercial", "Secrétaire"]];

// remplir le tableau de simulation de BDD OK
for (let index = 0; index < projets.length; index++) {
    let moveIdUserStory = projets[index].IdUserStory;
    let moveProjectName = projets[index].projet;
    let moveUserStory = projets[index].userStory;
    let moveSprint = projets[index].sprint;
    let moveComment = projets[index].commentaire;

    dataProject.push([moveIdUserStory,	moveProjectName,	"Client",	moveUserStory,	"Scrum Master",	"Développeur",	"Responsable des études",	"Commercial",	"Technicien support",	"Technico-commercial",	"Secrétaire",	moveSprint,	moveComment]);
}

// remplir le tableau listOfProjectsAndClients OK
for (let index = 1; index < dataProject.length; index++) {
    listOfProjectsAndClients.push([dataProject[index][1], "à remplir"]);
}
// supprimer les données multiples dans listOfProjectsAndClients OK
for (let index = 1; index < listOfProjectsAndClients.length; index++) {
    for (let index2 = index + 1; index2 < listOfProjectsAndClients.length; index2++) {
        let itemSelected = listOfProjectsAndClients[index][0];
        let itemToCompare = listOfProjectsAndClients[index2][0];
        if (itemSelected === itemToCompare) {
            listOfProjectsAndClients.splice([index2], 1);
            index -= 1;
        }
    }    
}

// ajouter des clients au tableau listOfProjectsAndClients OK
for (let index = 1; index < listOfProjectsAndClients.length; index++) {
    listOfProjectsAndClients[index][1] = clients[index].raisonSociale;
}
    
// ajouter les clients au tableau dataProject OK
for (let index = 1; index < dataProject.length; index++) {
    let index2 = 0;
    let flagPass = false;

    while (flagPass === false || index2 === listOfProjectsAndClients.length) {
        if ( dataProject[index][1] === listOfProjectsAndClients[index2][0]) {
            dataProject[index][2] = listOfProjectsAndClients[index2][1];
            flagPass = true;
            index2 = 0;
        } else {
            index2 = index2 + 1;
        }
    }

}

// ajouter des scrum masters au tableau listOfProjectsAndClients OK
addCollabInLPAC("Scrum Master", 2);

// ajouter des développeurs au tableau listOfProjectsAndClients OK
addCollabInLPAC("Développeur", 3);

// ajouter des responsables des études au tableau listOfProjectsAndClients OK
addCollabInLPAC("Responsable Etude", 4);

// ajouter des commerciaux au tableau listOfProjectsAndClients OK
addCollabInLPAC("Commercial", 5);

// ajouter des Technicien support au tableau listOfProjectsAndClients OK
addCollabInLPAC("Technicien support", 6);

// ajouter des Technico-commercial au tableau listOfProjectsAndClients OK
addCollabInLPAC("Technico-commercial", 7);

// ajouter des secrétaires au tableau listOfProjectsAndClients OK
addCollabInLPAC("Secrétaire", 8);

// ajouter les scrums master au tableau datatProject OK
LPACtoDatatProject(2, 4);

// ajouter les développeurs au tableau datatProject OK
LPACtoDatatProject(3, 5);

// ajouter les responsables des études au tableau datatProject OK
LPACtoDatatProject(4, 6);

// ajouter les commerciaux au tableau datatProject OK
LPACtoDatatProject(5, 7);

// ajouter les techniciens support au tableau datatProject OK
LPACtoDatatProject(6, 8);

// ajouter les technico commerciaux au tableau datatProject OK
LPACtoDatatProject(7, 9);

// ajouter les secrétaires au tableau datatProject OK
LPACtoDatatProject(8, 10);


/* -------------------- remplir le menu deroulant collaborateur à partir du fichier "collaborateurs.js" -------------------- */
/* ---------- présent sur page projet et saisie intervention ---------- */

for (let index = 0; index < collaborateurs.length; index++) {
    if (collaborateurs[index].fonctionCollabo === "Développeur") {
        /** @type {object} création d'un nouvel objet "option" dans la liste déroulante "développeurs". */
        let option = document.createElement("option");

        /** @type {object} objet "option" nouvellement créé dans la liste déroulante "développeurs". */
        let newDev = interventionsOf.appendChild(option);

        /** @type {string} concaténation du nom et prénom du développeur. */
        let developerName = collaborateurs[index].nomCollabo + " " + collaborateurs[index].prenomCollabo;

        /** @type {object} variable contenant la liste d'options du menu déroulant. provient de interventionsOf.querySelectorAll("option"). */
        let optionDevList = interventionsOf.querySelectorAll("option");

        /** @type {number} variable contenant le nombre d'items du menu déroulant. */
        let indexOfNewOption = optionDevList.length-1;

        /** @type {boolean} drapeau permettant d'indiquer si la variable itemToMove à trouvé sa place dans la liste d'options du menu déroulant. */
        let flagCorrectlyPlaced = false;
        
        /** @type {string} variable contenant la valeur d'une option du menu déroulant. après son initialisation, le noeud HTML dont cette variable est originaire est trié et déplacé. */
        let itemToMove = optionDevList[indexOfNewOption].value;
        
        /** @type {string} variable contenant la valeur d'une option du menu déroulant. cette variable sert à trier le menu d'options et correspond au noeud HTML précédent le noeud HTML itemToMove. */
        let itemToCompare = optionDevList[indexOfNewOption-1].value;
        
        newDev.innerText = developerName; // innerText pour ne pas echapper les balises html, comme ca , si qqn veut inserer des balises c'est inefficace et ca se voit
        newDev.value = developerName;
        itemToMove = optionDevList[indexOfNewOption].value;
        itemToCompare = optionDevList[indexOfNewOption-1].value;

        while (flagCorrectlyPlaced === false) {
            if (itemToMove < itemToCompare && itemToCompare != optionDevList[0].value) {
                interventionsOf.insertBefore(optionDevList[indexOfNewOption], optionDevList[indexOfNewOption-1]);
                optionDevList = interventionsOf.querySelectorAll("option");
                flagCorrectlyPlaced = false;
                indexOfNewOption -= 1;
                itemToMove = optionDevList[indexOfNewOption].value;
                itemToCompare = optionDevList[indexOfNewOption-1].value;
            } else {
                flagCorrectlyPlaced = true;
                optionDevList = interventionsOf.querySelectorAll("option");
            }    
        }
    }    
}


/* -------------------- remplir le menu deroulant "projets" à partir du tableau listOfProjectesAndClients -------------------- */
/* ---------- présent sur page projet et saisie intervention ---------- */




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


/**
 * @function addCollabInLPAC()
 * @description fonction pour remplir le tableau "listOfProjectsAndClients" selon les fonctions exercée par les collaborateurs, depuis le fichier "collaborateurs.js".
 * @param {string} searchedFunction fonction recherchée parmi les collaborateurs.
 * @param {*} columnInLPAC index de la colonne alimentée dans le tableau "listOfProjectsAndClients".
 */
function addCollabInLPAC(searchedFunction, columnInLPAC) {
    /** @type {number} index de ligne dans le tableau "listOfProjectsAndClients". */ // tableau à remplir
    let i = 1;
    /** @type {number} index d'objet dans le tableau d'objets du fichier "collaborateurs.js" */ // tableau de données
    let i2 = 0;
    while (i < listOfProjectsAndClients.length) { // tableau à remplir
        if (collaborateurs[i2].fonctionCollabo === searchedFunction) {
            let nom = collaborateurs[i2].nomCollabo + " " + collaborateurs[i2].prenomCollabo;
            listOfProjectsAndClients[i][columnInLPAC] = nom;
            i += 1;
            i2 += 1;            
        } else {        
            i2 += 1;
        }
        if (i2 >= collaborateurs.length) {
            i2 = 0;            
        }  
    }  

}

/**
 * @function LPACtoDatatProject
 * @description fonction pour remplir le tableau "dataProject" depuis le tableau "listOfProjectAndClients".
 * @param {number} columnInLPAC numéro de la colonne dans le tableau "listOfProjectsAndClients" dont les données vont être copiées dans le tableau "dataProject".
 * @param {*} columnInDataProject numéro de la colonne dans le tableau "dataProject" qui va recevoir les données copiées depuis le tableau "listOfProjectsAndClients".
 */
function LPACtoDatatProject(columnInLPAC, columnInDataProject){
    /** @type {number} index d'objet dans le tableau "dataProject". */ // tableau à remplir
    let i = 1;
    /** @type {number} index de ligne dans le tableau "listOfProjectsAndClients". */ // tableau de données
    let i2 = 1;
    while (i < dataProject.length) { // tableau à remplir
        dataProject[i][columnInDataProject] = listOfProjectsAndClients[i2][columnInLPAC];
        i += 1;
        i2 += 1;
        if (i2 >= listOfProjectsAndClients.length) {
            i2 = 1;            
        }  
    }
}