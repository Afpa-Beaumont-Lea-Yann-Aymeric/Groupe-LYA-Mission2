"use strict";

/**
 * @author Yann BOYER
 */


/* ------------------------------  variables page gestion de projets ------------------------------ 

console.table(dataProject);
*/
/* ------------------------------  traitement ------------------------------ */

/* -----  afficher le tableau des interventions des développeurs ----- */
/** @type {object} corps du tableau de la page HTML "gestionProjet"*/
let tab = document.getElementsByTagName("tbody")[0];
for (let index = 1; index < dataProject.length; index++) {
    let row = document.createElement("tr");
    let row2 = document.createElement("tr");
    let row3 = document.createElement("tr");
    for (let index2 = 0; index2 < 5; index2++) {
        let cell = document.createElement("td");
        let cellInfoRow2 = document.createElement("td");
        let cellInfoRow3 = document.createElement("td");
        let textInCell = "string";
        let textMoreInfoRow2 = "string"; 
        let textMoreInfoRow3 = "string";

        if (index2 === 0) {
            textInCell = document.createTextNode(dataProject[index][1]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][0] + " : " + dataProject[index][0]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][8] + " : " + dataProject[index][8]);
        } else if (index2 === 1) {
            textInCell = document.createTextNode(dataProject[index][2]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][4] + " : " + dataProject[index][4]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][9] + " : " + dataProject[index][9]);
        } else if (index2 === 2) {
            textInCell = document.createTextNode(dataProject[index][3]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][5] + " : " + dataProject[index][5]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][10] + " : " + dataProject[index][10]);
        } else if (index2 === 3) {
            textInCell = document.createTextNode(dataProject[index][5]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][6] + " : " + dataProject[index][6]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][11] + " : " + dataProject[index][11]);
        } else {
            textInCell = document.createTextNode(dataProject[index][11]);
            textMoreInfoRow2 = document.createTextNode(dataProject[0][7] + " : " + dataProject[index][7]);
            textMoreInfoRow3 = document.createTextNode(dataProject[0][12] + " : " + dataProject[index][12]);
        }
        cell.appendChild(textInCell);
        cellInfoRow2.appendChild(textMoreInfoRow2);
        cellInfoRow3.appendChild(textMoreInfoRow3);
        row.appendChild(cell);
        row2.appendChild(cellInfoRow2);
        row3.appendChild(cellInfoRow3);
    }   
    tab.appendChild(row);
    tab.appendChild(row2);
    tab.appendChild(row3);
    
    row2.style.display = "none";
    row3.style.display = "none";

    row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "blueviolet";
        row.style.color = "whitesmoke";
    });

    row.addEventListener("mouseleave", () => {
        row.style.boxShadow = "none";
        row.style.backgroundColor = "inherit";
        row.style.color = "inherit";
        if (row2.style.display === "block") {
            row.style.backgroundColor = "blueviolet";
            row.style.color = "whitesmoke";
        }

    });


    row.addEventListener('click',  () => {
        if (row2.style.display === "block") {
            row2.style.display = "none";
            row3.style.display = "none";
            row.style.backgroundColor = "inherit";
            row.style.color = "black";
        } else {
            row2.style.display = "block";
            row3.style.display = "block";
            row.style.backgroundColor = "blueviolet";
            row.style.color = "whitesmoke";
        }
    });
    row2.addEventListener('click', () => {
        row2.style.display = "none";
        row3.style.display = "none";
        row.style.backgroundColor = "inherit";
        row.style.color = "inherit";
    });

    row3.addEventListener('click', () => {
        row2.style.display = "none";
        row3.style.display = "none";
        row.style.backgroundColor = "inherit";
        row.style.color = "inherit";
    });


    row2.style.backgroundColor = "blueviolet";
    row2.style.color = "whitesmoke";
    row3.style.backgroundColor = "blueviolet";
    row3.style.color = "whitesmoke";
}






/*
interventionsOf.addEventListener("change", () => { // indexOfCellForSearch 3
    
    let optionSelected = interventionsOf.value;
    if (optionSelected === interventionsOf[0].value) {
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            console.log("----- affiche tout " + allTR[index]);
            allTR[index].style.display = "block";
        }
        
    } else {
        
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            let allTD = allTR[index].querySelectorAll("td");
            let searchedOption = allTD[3].innerText; // index : 3
            allTR[index].style.display = "block";
            console.log("-----" + allTR[index].querySelectorAll("td"));
            if (searchedOption === optionSelected) {
                allTR[index].style.display = "none";
                console.log("OK");
            }
        }
    }

});

*/

currentProject.addEventListener("change", menuSelected);
interventionsOf.addEventListener("change", menuSelected);
/*
menuSelected(interventionsOf, 3);

menuSelected(currentProject, 0);
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
 * @function menuSelected()
 * @description fonction pour trier le tableau HTML selon les éléments séléctionnés dans le menu déroulant.
 * @param {string} menu fait référence au menu qui servira à laire le tri.
 * @param {*} indexOfCellForSearch indique l'index de colonne (du tableau HTML) sur lequel le tri sera fait.
 */
/*
function menuSelected(menu, indexOfCellForSearch) {
    
    menu.addEventListener("change", () => {
        let optionSelected = menu.value;
        if (optionSelected === menu[0].value) { // afficher tout
            for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
                let allTR = tab.querySelectorAll("tr");
                console.log("----- affiche tout " + allTR[index]);
                allTR[index].style.display = "block";
            }
        } else {
            for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
                let allTR = tab.querySelectorAll("tr");
                let allTD = allTR[index].querySelectorAll("td");
                let searchedOption = allTD[indexOfCellForSearch].innerText; // index : 3
                console.log("-----" + allTR[index].querySelectorAll("td"));
                allTR[index].style.display = "none";
                if (searchedOption === optionSelected) {
                    allTR[index].style.display = "block";
                    console.log("OK");
                }
            }
        }
    });
}
*/
function menuSelected() {
    
    let interventionsOfSelected = interventionsOf.value;
    let currentProjectSelected = currentProject.value;
    console.log("---------------------");
    console.log(interventionsOfSelected);
    console.log(currentProjectSelected);
    if (currentProjectSelected === currentProject[0].value && interventionsOfSelected === interventionsOf[0].value) { // afficher tout
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            allTR[index].style.display = "block";
        }
        console.log("----- affiche tout ");
    } else if (currentProjectSelected === currentProject[0].value && interventionsOfSelected != interventionsOf[0].value) {
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            let allTD = allTR[index].querySelectorAll("td");
            let searchedPerson = allTD[3].innerText; // index : 3
            allTR[index].style.display = "none";
            if (searchedPerson === interventionsOfSelected) {
                allTR[index].style.display = "block";
                console.log("OK");
            }
        }
    } else if (currentProjectSelected != currentProject[0].value && interventionsOfSelected === interventionsOf[0].value) {
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            let allTD = allTR[index].querySelectorAll("td");
            let searchedProject = allTD[0].innerText; // index : 0
            allTR[index].style.display = "none";
            if (searchedProject === currentProjectSelected) {
                allTR[index].style.display = "block";
                console.log("OK");
            }
        }
    } else {
        for (let index = 0; index < (dataProject.length - 1) * 3; index = index + 3) {
            let allTR = tab.querySelectorAll("tr");
            let allTD = allTR[index].querySelectorAll("td");
            let searchedPerson = allTD[3].innerText; // index : 3
            let searchedProject = allTD[0].innerText; // index : 0
            //   console.log("-----" + allTR[index].querySelectorAll("td"));
            allTR[index].style.display = "none";
            if (searchedPerson === interventionsOfSelected && searchedProject === currentProjectSelected) {
                console.log(searchedPerson + " + " + searchedProject);
                allTR[index].style.display = "block";
                console.log("OK");
            }

        }
    }
}




/* 
                    <ul>
                        <li >ID : </li>
                        <li>User Story : </li>
                    </ul>
                    <ul>
                        <li >Sprint : </li>
                        <li >Développeur pour cette User Story: </li>
                        <li>Commentaire : </li> 
                    </ul>
                </div>
                
                <div id="teamInfo">
                    <ul>
                        <li>Client : </li>
                        <li>Projet : </li>
                    </ul>
                    <ul>
                        <li >Scrum Master : </li>
                        <li >Responsable des études : </li>
                        <li >Commercial : </li>
                        <li >Technicien support : </li>
                        <li >Technico commercial : </li>
                        <li >Secrétaire : </li>
                    </ul>
                </div>
*/

