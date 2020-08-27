/**
 * @file Manages the feature of research field in gestion-rh.html
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */


function getCollaboratorsToShow(){
let collaboratorsToShow = [];
    collaborators.forEach(function (collaborator, i) {
        let match = false;
        for (let property in collaborator) {
            if (collaborator[property].toLowerCase().search(search.toLowerCase()) !== -1) {
                match = true;
            }
        }
        if (match) {
            collaboratorsToShow.push(collaborator);
        }
    })

    return collaboratorsToShow;
}
