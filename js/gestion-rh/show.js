/**
 * @file Manage the showing of collaborators
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */


/**
 * Show the collaborators in the table depending of the pagination
 * @param start - The index of the first collaborator to show
 * @param end - The index of the last collaborator to show
 */
function showCollaborators(start, end){
    $.each(collaboratorsToShow.slice(start, end), function (i, collab) {
        let row = '<tr>\n' +
            '                <td class="lastName">' + collab.lastName + '</td>\n' +
            '                <td class="firstName">' + collab.firstName + '</td>\n' +
            '                <td class="role">' + collab.role + '</td>\n' +
            '                <td class="qualification">' + collab.qualification + '</td>\n' +
            '                <td class="contract">' + collab.contract + '</td>\n' +
            '                <td class="email">' + collab.email + '</td>\n' +
            '                <td>\n' +
            '                    <a class="edit"><i class="far fa-edit"></i></a>\n' +
            '                    <a class="valid" style="display:none"><i class="fas fa-check"></i></a>\n' +
            '                    <a class="remove">\n' +
            '                        <i class="fas fa-times"></i>\n' +
            '                    </a>' +
            '                </td>\n' +
            '            </tr>';
        $("#listCollab tbody").append(row);
    })
}