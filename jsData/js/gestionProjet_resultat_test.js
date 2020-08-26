"use strict";

/**
 * @author Yann BOYER
 */


 let msg = location.search;
 let resultatFormShowInterventionOf = document.getElementById(resultatFormShowInterventionOf);
 let resultatFormCurrentProjet = document.getElementById(resultatFormCurrentProjet);
 let resultatFormCurrentUserStory = document.getElementById(resultatFormCurrentUserStory);
 let resultatFormInterventionDate = document.getElementById(resultatFormInterventionDate);
 let resultatFormComment = document.getElementById(resultatFormComment);

 console.log(msg);

/*
 <p>Ceci est une page pour tester les envois de formulaire</p>   
 <p>collaborateur : <span id="resultatFormShowInterventionOf"></span></p>
 <p>projet : <span id="resultatFormCurrentProjet"></span></p>
 <p>user story<span id="resultatFormCurrentUserStory"></span></p>
 <p>date : <span id="resultatFormInterventionDate"></span></p>
 <p>commentaire : <span id="resultatFormComment"></span></p>
*/

resultatFormShowInterventionOf.value = "test";