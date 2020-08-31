/**
 * @file Manages the features that edit or remove a collaborator
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

/**
 * Change the row in edit mode
 * @param {HTMLTableRowElement} trElement
 */
function editMode(trElement){
    for (let i = 0; i < $(trElement).children("td").length - 1; i++) {
        let tdEq = $(trElement).children('td:eq(' + i + ')');
        let value = tdEq.html();
        switch (i) {
            case 0:
            case 1:
                tdEq.html('<input type="text" value="' + value + '" size="5">');
                break;
            case 2:
                tdEq.html('<select class="custom-select" id="role">\n' +
                    '                                <option ' + (value === 'Commercial' ? 'selected' : '') + '>Commercial</option>\n' +
                    '                                <option ' + (value === 'Développeur' ? 'selected' : '') + '>Développeur</option>\n' +
                    '                                <option ' + (value === 'Responsable Etude' ? 'selected' : '') + '>Responsable Etude</option>\n' +
                    '                                <option ' + (value === 'Scrum Master' ? 'selected' : '') + '>Scrum Master</option>\n' +
                    '                                <option ' + (value === 'Secrétaire' ? 'selected' : '') + '>Secrétaire</option>\n' +
                    '                                <option ' + (value === 'Technico-Commercial' ? 'selected' : '') + '>Technico-Commercial</option>\n' +
                    '                                <option ' + (value === 'Technicien support' ? 'selected' : '') + '>Technicien support</option>\n' +
                    '                            </select>');
                break;
            case 3:
                tdEq.html('<select class="custom-select" id="qualification">\n' +
                    '                                <option ' + (value === 'Agent commercial' ? 'selected' : '') + '>Agent commercial</option>\n' +
                    '                                <option ' + (value === 'Chef de service' ? 'selected' : '') + '>Chef de service</option>\n' +
                    '                                <option ' + (value === 'Designer' ? 'selected' : '') + '>Designer</option>\n' +
                    '                                <option ' + (value === 'Développeur BDD' ? 'selected' : '') + '>Développeur BDD</option>\n' +
                    '                                <option ' + (value === 'Développeur Web' ? 'selected' : '') + '>Développeur Web</option>\n' +
                    '                                <option ' + (value === 'Secrétaire billingu' ? 'selected' : '') + '>Secrétaire billingu</option>\n' +
                    '                                <option ' + (value === 'Agent commercial' ? 'selected' : '') + '>Agent commercial</option>\n' +
                    '                            </select>');
                break;
            case 4:
                tdEq.html('<select class="custom-select form-control" id="contract">\n' +
                    '                                <option ' + (value === 'CDD' ? 'selected' : '') + '>CDD</option>\n' +
                    '                                <option ' + (value === 'CDI' ? 'selected' : '') + '>CDI</option>\n' +
                    '                                <option ' + (value === 'INTERIM' ? 'selected' : '') + '>INTERIM</option>\n' +
                    '                                <option ' + (value === 'STAGE' ? 'selected' : '') + '>STAGE</option>\n' +
                    '                            </select>');
                break;
            case 5:
                tdEq.html('<input type="text" value="' + value + '" size="35">');
        }
    }
    $(trElement).children("td").children(".edit").hide();
    $(trElement).children("td").children(".valid").show();
}

/**
 * Change the row in static mode
 * @param {HTMLTableRowElement} trElement
 */
function staticMode(trElement){
    for (let i = 0; i < $(trElement).children("td").length - 1; i++) {
        let tdEq = $(trElement).children('td:eq(' + i + ')');
        let value = tdEq.children('input, select').val();
        tdEq.html(value);
    }
    $(this).hide();
    $(trElement).children("td").children(".valid").hide();
    $(trElement).children("td").children(".edit").show();
}

/**
 * Ask a confirmation and remove the row if the user click on confirm
 * @param {HTMLTableRowElement} trElement
 */
function removeRow(trElement){
    let firstName = $(trElement).children('.firstName').text();
    let lastName = $(trElement).children('.lastName').text();
    let remove = confirm('Voulez-vous supprimer le collaborateur ' + firstName + ' ' + lastName + '?');
    if (remove) {
        $(trElement).remove();
    }
}

