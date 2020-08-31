"use strict";

/**
 * @author Yann BOYER
 */


/* ------------------------------  variables page gestion de projets ------------------------------ */

let infobulle = document.getElementById("infobulle");

/** @type {object} corps du tableau de la page HTML "gestionProjet"*/
let tab = document.getElementsByTagName("tbody")[0];

/* ------------------------------  traitement ------------------------------ */

/* -----  faire apparaitre et disparaitre une infobulle ----- */

setTimeout(() => {
    infobulle.style.display = "block";
}, 2000);
setTimeout(() => {
    infobulle.style.display = "none";
}, 9000);


/* -----  afficher le tableau des interventions des développeurs ----- */

for (let index = 1; index < dataProject.length; index++) {
    /** @type {string} couleur des lignes du tableau (de la page gestion de projets) donnant des détails sur les interventions des développeurs */
    let colorOfHiddenRow = "rgba(137, 43, 226, 0.78)";
    /** @type {objet} correspond à la ligne de résumé de l'intervention d'un développeur sur un projet / une user story */
    let row = document.createElement("tr");
    /** @type {objet} correspond à la première ligne des détails concernant l'intervention d'un developpeur sur une projet / une user story */
    let row1 = document.createElement("tr");
    /** @type {objet} correspond à la seconde ligne des détails concernant l'intervention d'un developpeur sur une projet / une user story */
    let row2 = document.createElement("tr");
    /** @type {objet} correspond à la troisième ligne de details concernant l'intervention d'un développeur sur un projet / une user story */
    let row3 = document.createElement("tr");
    for (let index2 = 0; index2 < 5; index2++) {
        let cell = document.createElement("td");
        let cellInfoRow1 = document.createElement("td");
        let cellInfoRow2 = document.createElement("td");
        let cellInfoRow3 = document.createElement("td");
        let textInCell = "string";
        let textMoreInfoRow1 = "string";
        let textMoreInfoRow2 = "string";
        let textMoreInfoRow3 = "string";


        cellInfoRow1.colSpan = "5";

        if (index2 === 0) {
            textInCell = document.createTextNode(dataProject[index][1]);
            textMoreInfoRow1 = document.createTextNode(dataProject[0][12] + " : " + dataProject[index][12]);
            cellInfoRow1.appendChild(textMoreInfoRow1);
            row1.appendChild(cellInfoRow1)
            textMoreInfoRow2 = document.createTextNode("");
            textMoreInfoRow3 = document.createTextNode("");
        } else if (index2 === 1) {
            textInCell = document.createTextNode(dataProject[index][0]); // release
            textMoreInfoRow2 = document.createTextNode(dataProject[0][4] + " : " + dataProject[index][4]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][8] + " : " + dataProject[index][8]);
        } else if (index2 === 2) {
            textInCell = document.createTextNode(dataProject[index][3]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][10] + " : " + dataProject[index][10]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][9] + " : " + dataProject[index][9]);
        } else if (index2 === 3) {
            textInCell = document.createTextNode(dataProject[index][5]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][7] + " : " + dataProject[index][7]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][6] + " : " + dataProject[index][6]);
        } else {
            textInCell = document.createTextNode(dataProject[index][11]);
            textMoreInfoRow2 = document.createTextNode("");
            textMoreInfoRow3 = document.createTextNode(dataProject[0][2] + " : " + dataProject[index][2]); // client
        }
        cell.appendChild(textInCell);
        cellInfoRow2.appendChild(textMoreInfoRow2);
        cellInfoRow3.appendChild(textMoreInfoRow3);
        row.appendChild(cell);
        row2.appendChild(cellInfoRow2);
        row3.appendChild(cellInfoRow3);
    }
    tab.appendChild(row);
    tab.appendChild(row1);
    tab.appendChild(row2);
    tab.appendChild(row3);

    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";

    row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "blueviolet";
        row.style.color = "whitesmoke";
    });

    row.addEventListener("mouseleave", () => {
        row.style.backgroundColor = "inherit";
        row.style.color = "inherit";
        if (row1.style.display === "table-row") {
            row.style.backgroundColor = "blueviolet";
            row.style.color = "whitesmoke";
        }
    });

    row.addEventListener('click',  () => {
        if (row1.style.display === "table-row") {
            row1.style.display = "none";
            row2.style.display = "none";
            row3.style.display = "none";
            row.style.backgroundColor = "inherit";
            row.style.color = "black";
        } else {
            row1.style.display = "table-row";
            row2.style.display = "table-row";
            row3.style.display = "table-row";
            row.style.backgroundColor = "blueviolet";
            row.style.color = "whitesmoke";
        }
    });

    row1.addEventListener('click', () => {closeMoreInfo(row, row1, row2, row3)});
    row2.addEventListener('click', () => {closeMoreInfo(row, row1, row2, row3)});
    row3.addEventListener('click', () => {closeMoreInfo(row, row1, row2, row3)});

    row1.style.backgroundColor = colorOfHiddenRow;
    row1.style.color = "whitesmoke";
    row2.style.backgroundColor = colorOfHiddenRow;
    row2.style.color = "whitesmoke";
    row3.style.backgroundColor = colorOfHiddenRow;
    row3.style.color = "whitesmoke";
}

currentProject.addEventListener("change", menuSelected);
interventionsOf.addEventListener("change", menuSelected);


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
 * @function menuSelected()
 * @description fonction pour trier les données affichées dans le tableau de la page gestion de projets, selon les options délectionnées dans les menus déroulants.
 */
function menuSelected() {
    /** @type {string} correspond au contenu sélectionné dans le menu déroulant "développeurs". */
    let interventionsOfSelected = interventionsOf.value;
    /** @type {string} correspond au contenu sélectionné dans le menu déroulant "projets". */
    let currentProjectSelected = currentProject.value;
    /** @type {number} nombre de ligne concernant chaque projet dans le tableau HTML.*/
    let numberOfRowByProject = 4;
    /** @type {object} correspond à une ligne (tr) du tableau HTML. */
    let allTR;
    /** @type {object} correspond à une cellule (td) du tableau HTML. */
    let allTD;
    /** @type {string} variable qui va chercher le nom d'un développeur dans le tableau HTML (pour comparaison avecle nom sélectionné dans le menu déroulant). */
    let searchOnPerson = "string";
    /** @type {string} variable qui va chercher le nom d'un projet dans le tableau HTML (pour comparaison avecle nom sélectionné dans le menu déroulant). */
    let searchOnProject
    if (currentProjectSelected === currentProject[0].value && interventionsOfSelected === interventionsOf[0].value) { // afficher tout
        for (let index = 0; index < (dataProject.length - 1) * numberOfRowByProject; index = index + numberOfRowByProject) {
            allTR = tab.querySelectorAll("tr");
            allDisplayNone(allTR, index);
            allTR[index].style.display = "table-row";
        }
    } else if (currentProjectSelected === currentProject[0].value && interventionsOfSelected != interventionsOf[0].value) { // afficher tous les projets du développeur selectionné dans le menu déroulant
        for (let index = 0; index < (dataProject.length - 1) * numberOfRowByProject; index = index + numberOfRowByProject) {
            allTR = tab.querySelectorAll("tr");
            allTD = allTR[index].querySelectorAll("td");
            searchOnPerson = allTD[3].innerText; // index : 3
            allDisplayNone(allTR, index);
            if (searchOnPerson === interventionsOfSelected) {
                allTR[index].style.display = "table-row";
            }
        }
    } else if (currentProjectSelected != currentProject[0].value && interventionsOfSelected === interventionsOf[0].value) { // afficher toutes les interventions des développeurs selon un projet
        for (let index = 0; index < (dataProject.length - 1) * numberOfRowByProject; index = index + numberOfRowByProject) {
            allTR = tab.querySelectorAll("tr");
            allTD = allTR[index].querySelectorAll("td");
            searchOnProject = allTD[0].innerText; // index : 0
            allDisplayNone(allTR, index);
            if (searchOnProject === currentProjectSelected) {
                allTR[index].style.display = "table-row";
            }
        }
    } else {
        for (let index = 0; index < (dataProject.length - 1) * numberOfRowByProject; index = index + numberOfRowByProject) { // afficher selon un projet et un developpeur
            allTR = tab.querySelectorAll("tr");
            allTD = allTR[index].querySelectorAll("td");
            searchOnPerson = allTD[3].innerText; // index : 3
            searchOnProject = allTD[0].innerText; // index : 0
            allDisplayNone(allTR, index);
            if (searchOnPerson === interventionsOfSelected && searchOnProject === currentProjectSelected) {
                allTR[index].style.display = "table-row";
            }
        }
    }
}


/**
 * @function allDisplayNone()
 * @description réinitialisation de la visibilité des lignes du tableau HTML concernant un projet, et le style visuel appliqué sur la première ligne.
 * @param {string} allTR se réfère à une ligne dans le tableau HTML.
 * @param {string} index se réfère à l'index d'une ligne dans le tableau HTML.
 */
function allDisplayNone(allTR, index) {/**/
    allTR[index].style.display = "none";
    allTR[index].style.color = "inherit";
    allTR[index].style.backgroundColor = "inherit";
    allTR[index + 1].style.display = "none";
    allTR[index + 2].style.display = "none";
    allTR[index + 3].style.display = "none";
}



/**
 * @function closeMoreInfo()
 * @description fermeture des lignes de "détails" dans le tableau HTML, concernant les interventions des développeurs.
 * @param {string} row se réfère à la ligne principale du projet dans le tableau HTML. (row)
 * @param {string} row1 se réfère à la première ligne d'information sur projet dans le tableau HTML. (row1 / commentaires)
 * @param {string} row2 se réfère à la seconde ligne d'information sur projet dans le tableau HTML.(row2)
 * @param {string} row3 se réfère à la troisième ligne d'information sur projet dans le tableau HTML. (row3)
 */
function closeMoreInfo(row, row1, row2, row3) {
    row.style.backgroundColor = "inherit";
    row.style.color = "inherit";
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
}