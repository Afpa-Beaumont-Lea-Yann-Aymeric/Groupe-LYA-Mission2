/**
 * @file Manages the feature that allows to choose by what parameter and what order, the variable gestion-rh will be sort
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

function sortCollaborator(sortBy, order) {
    if (order === 'asc') {
        collaboratorsToShow.sort(dynamicSort(sortBy));
    } else if (order === 'dsc') {
        collaboratorsToShow.sort(dynamicSort("-" + sortBy));
    }
}

function selectSort(id, sortBy, order) {
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