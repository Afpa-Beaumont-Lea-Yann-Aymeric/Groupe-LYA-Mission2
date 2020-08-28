/**
 * @file Manages the feature of research field in gestion-rh.html
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */


/**
 * Get the collaborators to show depending of the search value
 * @return {[]} - The array of colloborators to show
 */
function getCollaboratorsToShow() {
    let arraySearch = search.split(" ");
    let collaboratorsToShow = [];
    collaborators.forEach(function (collaborator, i) {
        let match = false;
        arraySearch.forEach(function (search) {
            for (let property in collaborator) {
                if (collaborator[property].toLowerCase().search(search.toLowerCase()) !== -1) {
                    match = true;
                }
            }

        })
        if (match) {
            collaboratorsToShow.push(collaborator);
        }
    })

    return collaboratorsToShow;
}
