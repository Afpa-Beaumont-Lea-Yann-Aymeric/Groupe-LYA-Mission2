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

/** @type {object}  liste déroulante : sélection du projet, par la secretaire technique, concernant la création d'une nouvelle intervention. */
let currentProject = document.getElementById("currentProject");


/* ------------------------------  traitement ------------------------------ 

if (optionDevList.value === "Bernard Françoise") {
    currentProject.display = "none";
}*/
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
/** @type {object} est un tableau réunissant toutes les données issues des fichiers "collaborateurs", "projets" et "clients", pour simuler une base de données. */
let dataProject = [["Release",	"Nom du projet",	"Client",	"User Story",	"Scrum Master",	"Développeur",	"Responsable des études",	"Commercial",	"Technicien support",	"Technico-commercial",	"Secrétaire",	"Sprint",	"Commentaire"]];
/** @type {object} est un tableau intermédiaire à la constitution du tableau "dataProject". Ce tableau permet l'organisation des données issues des fichier "collaborateurs" et "clients". */
let listOfProjectsAndClients = [["Nom du projet", "Client", "Scrum Master", "Développeur", "Responsable des études", "Commercial", "Technicien support", "Technico-commercial", "Secrétaire"]];

// remplir le tableau de simulation de BDD
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

// ajouter des clients au tableau listOfProjectsAndClients
for (let index = 1; index < listOfProjectsAndClients.length; index++) {
    listOfProjectsAndClients[index][1] = clients[index].raisonSociale;
}
    
// ajouter les clients au tableau dataProject
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

// ajout selon les métiers au tableau listOfProjectsAndClients
addCollabInLPAC("Scrum Master", 2);
addCollabInLPAC("Développeur", 3);
addCollabInLPAC("Responsable Etude", 4);
addCollabInLPAC("Commercial", 5);
addCollabInLPAC("Technicien support", 6);
addCollabInLPAC("Technico-commercial", 7);
addCollabInLPAC("Secrétaire", 8);

// ajout selon les métiers au tableau datatProject
LPACtoDataProject(2, 4); // scrums master
LPACtoDataProject(3, 5); // développeurs
LPACtoDataProject(4, 6); // responsables des études
LPACtoDataProject(5, 7); // commerciaux
LPACtoDataProject(6, 8); // techniciens support
LPACtoDataProject(7, 9); // technico commerciaux
LPACtoDataProject(8, 10); // secrétaires


/* -------------- remplir le menu deroulant collaborateur à partir du fichier "collaborateurs.js" -------------- */
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


/* ---------------- remplir le menu deroulant "projets" à partir du tableau listOfProjectsAndClients ---------------- */
/* ---------- présent sur page projet et saisie intervention ---------- */
addOptionInScrollingMenu(listOfProjectsAndClients, currentProject, 0)


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
 * @description fonction pour remplir le tableau "listOfProjectsAndClients" selon les métiers exercés par les collaborateurs, depuis le fichier "collaborateurs.js".
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
 * @function LPACtoDataProject
 * @description fonction pour remplir le tableau "dataProject" depuis le tableau "listOfProjectAndClients".
 * @param {number} columnInLPAC numéro de la colonne dans le tableau "listOfProjectsAndClients" dont les données vont être copiées dans le tableau "dataProject".
 * @param {*} columnInDataProject numéro de la colonne dans le tableau "dataProject" qui va recevoir les données copiées depuis le tableau "listOfProjectsAndClients".
 */
function LPACtoDataProject(columnInLPAC, columnInDataProject){
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


/**
 * @function addOptionInScrollingMenu()
 * @description fonction qui récupère dans un tableau et classe par ordre alphabétique les noms des options que l'on souhaite mettre dans un menu déroulant d'une page HTML.
 * @param {object} tab se réfère au tableau d'où viennent les données pour remplir le menu.
 * @param {number} columnInTab indique l'index de colonne où chercher les noms des options.
 * @param {objet} menu indique le menu à remplir dans la page HTML.
 */
function addOptionInScrollingMenu(tab, menu, columnInTab) {

    for (let index = 1; index < tab.length; index++) {
        let option = document.createElement("OPTION");
        let flagCorrectlyPlaced = false;
        let indexOfItem = 0;

        option.textContent = tab[index][columnInTab];
        option.value = tab[index][columnInTab];
        menu.appendChild(option);
        indexOfItem = menu.length - 1;

        while (flagCorrectlyPlaced === false) {
            if (menu[indexOfItem - 1].value === menu[0].value) {
                flagCorrectlyPlaced = true;
            } else if (menu[indexOfItem].value < menu[indexOfItem - 1].value) {
                menu.insertBefore(menu[indexOfItem], menu[indexOfItem - 1]);
                indexOfItem -= 1;
            } else {
                flagCorrectlyPlaced = true;
            }
        }
    }
}