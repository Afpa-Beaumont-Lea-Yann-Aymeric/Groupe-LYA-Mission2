"use strict";

/**
 * @author Yann BOYER
 */

let msg = location.search;
let resultatFormShowInterventionOf = document.getElementById("resultatFormShowInterventionOf");
let resultatFormCurrentProjet = document.getElementById("resultatFormCurrentProjet");
let resultatFormCurrentUserStory = document.getElementById("resultatFormCurrentUserStory");
let resultatFormInterventionDate = document.getElementById("resultatFormInterventionDate");
let resultatFormComment = document.getElementById("resultatFormComment");

msg = decodeURI(msg);
msg = msg.replace(/\+/gi, " ").replace(/[?]|interventionsOf|currentUserStory|currentProject|interventionDate|comment|=/gi, "").replace(/%2C/g, ",").replace("submitForm", "Formulaire envoyé").split("&");

resultatFormShowInterventionOf.innerText = msg[0];
resultatFormCurrentProjet.innerText = msg[1];
resultatFormCurrentUserStory.innerText = msg[2];
resultatFormInterventionDate.innerText = msg[3];
resultatFormComment.innerText = msg[4];
