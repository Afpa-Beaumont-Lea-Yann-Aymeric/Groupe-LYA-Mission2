/**
 * @file Manages the feature that allows to choose by what parameter and what order, the variable gestion-rh will be sort
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

/**
 * Sort the collaborators
 * @param sortBy - The parameter by which the collaborators will be sort
 * @param order - The order by which the collaborators will be sort, value accepted : 'asc' and 'dsc'
 */
function sortCollaborator(sortBy, order) {
    if (order === 'asc') {
        collaboratorsToShow.sort(dynamicSort(sortBy));
    } else if (order === 'dsc') {
        collaboratorsToShow.sort(dynamicSort("-" + sortBy));
    }
}

/**
 * Select by what parameter and order, the collaborators will be sort and refresh the page with new URL parameters
 * @param {string} id - The parameter by which the collaborators will be sort
 * @param {string} sortBy - The parameter by wich the collaborators are currently sort
 * @param {string} order - The order by which the collaborators will be sort, value accepted : 'asc' and 'dsc'
 */
function selectSort(id, sortBy, order) {
    if(order != 'asc' && order != 'dsc'){
        throw new Error('Vallue accepted for the attribute order : "asc" or "dsc"');
    }
    // If a new th is clicked, the order by default is ascendant, else, the order is swapped between ascendant and descendant
    if (sortBy !== id) {
        order = 'asc';
    } else {
        switch (order) {
            case 'asc':
                order = 'dsc';
                break;
            case 'dsc':
                order = 'asc';
                break;
        }
    }

    sortBy = id;
    // Redefined the URL parameters sortBy and order
    searchParams.set("sortBy", sortBy);
    searchParams.set("order", order);

    // Send URL parameters and refresh the page
    window.location.href = window.location.pathname + "?" + searchParams.toString();
}

/**
 * Show the up or down arrow depending on the display order
 * @param {HTMLTableHeaderCellElement} th
 * @return {void}
 */
function showArrow(th) {
    $("#listCollab").children("th").children(".fa-sort-down,.fa-sort-up").hide();
    if (order === "asc") $(th).children(".fa-sort-down").show();
    if (order === "dsc") $(th).children(".fa-sort-up").show();
}

/**
 * Sort an array of Object by the property<br>
 * If there is "-" before the property, array sort by order descendant, otherwise array sort by order ascendant
 * @param {string} property
 * @return {function(*, *): number}
 */
function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}