"use strict";

/**
 * @description affichage d'une alert pour visualisation des données envoyées lors des phases de développement.
 */
submitForm.addEventListener('click', () => {
    alert("affichage pour vérificiation lors du développement des données qui sont envoyées : " + showInterventionsOf.value + " " + currentProject.value + " " + currentUserStory.value + " " + interventionDate.value + " " + comment.value)
});

