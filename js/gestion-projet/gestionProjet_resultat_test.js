"use strict";

/**
 * @author Yann BOYER
 */


 let msg = location.search;
 var resultatFormShowInterventionOf = document.getElementById(resultatFormShowInterventionOf);
 var resultatFormCurrentProjet = document.getElementById(resultatFormCurrentProjet);
 var resultatFormCurrentUserStory = document.getElementById(resultatFormCurrentUserStory);
 var resultatFormInterventionDate = document.getElementById(resultatFormInterventionDate);
 var resultatFormComment = document.getElementById(resultatFormComment);

 resultatFormShowInterventionOf.innerText = "tre" ;
 console.log(msg);
 console.log(resultatFormComment);

/*
 <p>Ceci est une page pour tester les envois de formulaire</p>   
 <p>collaborateur : <span id="resultatFormShowInterventionOf"></span></p>
 <p>projet : <span id="resultatFormCurrentProjet"></span></p>
 <p>user story<span id="resultatFormCurrentUserStory"></span></p>
 <p>date : <span id="resultatFormInterventionDate"></span></p>
 <p>commentaire : <span id="resultatFormComment"></span></p>
*/
