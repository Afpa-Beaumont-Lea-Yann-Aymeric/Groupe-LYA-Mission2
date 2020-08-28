/**
 * @file The main file js for gestion-rh.html
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

const collabPerPage = 10;
let collaboratorsToShow, nbPages, currentPage;
let searchParams = new URLSearchParams(window.location.search);

let sortBy = searchParams.get("sortBy");
if (sortBy === null) sortBy = "lastName";

let order = searchParams.get("order");
if (order === null) order = "asc";

if (searchParams.get('p') === null) {
    currentPage = 1;
} else {
    currentPage = parseInt(searchParams.get('p'));
}

let search = searchParams.get('q');
if (search === null) search = "";


$(document).ready(function () {
    $("input[name=q]").val(search);

    collaboratorsToShow = getCollaboratorsToShow();
    nbPages = Math.ceil(collaboratorsToShow.length / collabPerPage);
    sortCollaborator(sortBy, order);

    $("#listCollab th a").click(function () {
        let id = $(this).attr("id");
        selectSort(id,sortBy, order);
    })

    showArrow($("#" + sortBy).parent("th"));
    let start = (currentPage - 1) * collabPerPage;
    let end = (currentPage * collabPerPage) - 1;
    showCollaborators(start, end);

    $(".edit").click(function () {
        let tr = $(this).parent("td").parent("tr");
        editMode(tr);
    })

    $(".valid").click(function () {
        let tr = $(this).parent("td").parent("tr");
        staticMode(tr);
    })

    $(".remove").click(function () {
        let tr = $(this).parent("td").parent("tr");
        removeRow(tr);
    })

    $("#listCollab tbody tr td:not(:last-child)").hover(function () {
        $(this).parent("tr").children("td:not(:last-child)").addClass("table-primary");
    }, function () {
        $(this).parent("tr").children("td:not(:last-child)").removeClass("table-primary");
    })


    $("#listCollab tbody tr td:not(:last-child)").click(function () {
        let tr = $(this).parent("tr");
        let lastName = tr.children(".lastName").text();
        let firstName = tr.children(".firstName").text();
        let role = tr.children(".role").text();
        let qualification = tr.children(".qualification").text();
        let contract = tr.children(".contract").text();
        let email = tr.children(".email").text();

        let msg = "Nom de famille : " + lastName + "\n" +
            "Prénom : " + firstName + "\n" +
            "Rôle : " + role + "\n" +
            "Qualification : " + qualification + "\n" +
            "Contrat : " + contract + "\n" +
            "E-mail : " + email + "\n";
        alert(msg);
    })

    if (nbPages > 1) generatePagination();
})
