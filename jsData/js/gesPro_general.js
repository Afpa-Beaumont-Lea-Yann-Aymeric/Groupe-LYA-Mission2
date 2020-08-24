"use strict";

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

/* ---------- remplir le menu deroulant collaborateur ---------- */
/* présent sur page projet et saisie intervention */

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




/*
*/

/* ------------------------------ simulation de base de donnée Projets ABI ------------------------------ */
let dataProject = [["ID",	"Nom du projet",	"Client",	"User Story",	"Scrum Master",	"Développeur",	"Responsable des études",	"Commercial",	"Technicien support",	"Technico commercial",	"Secrétaire",	"Sprint",	"Commentaire"]];
let listOfProjectsAndClients = [["Nom du projet", "Client", "Scrum Master"]];
// let nameFromDataProject = dataProject[0][1]; // indenter sur le premier chiffre
// let nameInProjectName = listOfProjectsAndClients[0][0]; // indenter sur le premier chiffre
//        let nameFromDataProject = dataProject[0][1];

// remplir le tableau de simulation de BDD
for (let index = 0; index < projets.length; index++) {
    let moveIdUserStory = projets[index].IdUserStory;
    let moveProjectName = projets[index].projet;
    let moveUserStory = projets[index].userStory;
    let moveSprint = projets[index].sprint;
    let moveComment = projets[index].commentaire;
    let moveClient = "string";

    dataProject.push([moveIdUserStory,	moveProjectName,	"Client",	moveUserStory,	"Scrum Master",	"Développeur",	"Responsable des études",	"Commercial",	"Technicien support",	"Technico commercial",	"Secrétaire",	moveSprint,	moveComment]);
};

/* 
*/
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
// ajouter des scrum masters au tableau listOfProjectsAndClients
/*{
    let i = 0;
    let i2 = 1;
    let developerName = "string";
    while (i2 < listOfProjectsAndClients.length) {
        while (i < collaborateurs.length) {
            if (collaborateurs[i].fonctionCollabo === "Scrum Master") {
                developerName = collaborateurs[i].nomCollabo + " " + collaborateurs[i].prenomCollabo;
                listOfProjectsAndClients[i2] = developerName;
                i += 1;
                i2 += 1;
            } else {
                if (i === collaborateurs.length - 1) {
                    i = 0;
                } else {
                    i = i + 1;
                }
            }
        }
    
    }

}

// ajouter les scrums master au tableau datatProject



console.table(listOfProjectsAndClients);
console.table(dataProject);

*/

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