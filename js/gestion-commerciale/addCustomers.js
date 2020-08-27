/**
 * @file Ce fichier contient des fonctions pour valider les informations pour ajouter un client
 */

/**
 *  Cette fonction permet de valider un formulaire <br>
 * Sécurirer les entrées pour que personne ne puisse changer notre code
 */
$("#addCustomers").submit(function (event) {
    event.preventDefault();
    let idClient = $(this).find("input[name=idClient]").val();
    let raisonsocial = $(this).find("input[name=raisonsocial]").val();
    let siret = $(this).find("input[name=siret]").val();
    let ville = $(this).find("input[name=ville]").val();
    let zip = $(this).find("input[name=zip]").val();
    let address = $(this).find("input[name=address]").val();
    let pays = $(this).find("input[name=pays]").val();
    let activite = $(this).find("input[name=activite]").val();

    let msg = "Vous venez d'ajouter le client suivant :\n" +
        "idClient : " + idClient  + "\n" +
        "raisonsocial : " + raisonsocial + "\n" +
        "siret : " + siret + "\n" +
        "ville : " + ville + "\n" +
        "zip : " + zip + "\n" +
        "address : " + address + "\n" +
        "pays : " + pays + "\n" +
        "activite : " + activite + "\n";

    if (idClientIsValid(idClient ) && raisonsocialIsValid(raisonsocial) && siretIsValid(siret) && villeIsValid(ville) && zipIsValid(zip) && addressIsValid(address) && paysIsValid(pays) && activiteIsValid(activite)) {
        alert(msg);
    } else {
        $('#addCustomers input').each(function () {
            $(this).focusout();
        })
    }
})
/**
 * Cette fonction permet de supprimer une classe <br>
 * Ajouter une classe
 * Vérifier si les champs sont valide ou non
 */
$("#addCustomers input").focusout(function () {
    let id = $(this).attr('name');
    let functionisValid = id + 'IsValid';
    if (window[functionisValid]($(this).val())) {
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');

    } else {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
    }

})



/**
 * Cette fonction permet de vérifier si l'idClient est valide <br>
 * Respecter le nombre de lettre demander
 * @param {string} string
 * returns {boolean}
 */
function idClientIsValid(string) {
    let regex = /[0-9]{4}$/;
    return regex.test(string);

}

/**
 * Cette fonction permet de voir si la Raison Social est valide <br>
 * Respecter le nombre de lettres demander
 * @param {string} string
 * returns {boolean}
 */
function raisonsocialIsValid(string) {
    let regex = /[a-zA-ZÀ-ÿ]{2,}$/;
    return regex.test(string);
}

/**
 * Cette fonction permet de tester si le numero de siret est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function siretIsValid(string) {
    let regex = /[0-9]{9}-[0-9]{5}$/;
    return regex.test(string);
}

/**
 *  Cette fonction permet de tester si la ville  est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function villeIsValid(string) {
    let regex = /[a-zA-zÀ-ÿ-]{2,}$/;
    return regex.test(string);
}

/**
 *  Cette fonction permet de tester si le Code Postal est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function zipIsValid(string) {
    let regex = /[0-9a-zA-Z-]{2,}$/;
    return regex.test(string);
}

/**
 *  Cette fonction permet de tester si l'adresse de la personne  est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function addressIsValid(string) {
    let regex = /[0-9a-zA-Z ]{2,}$/;
    return regex.test(string);
}

/**
 *  Cette fonction permet de tester si le pays est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function paysIsValid(string) {
    let regex = /[a-zA-ZÀ-ÿ]{2,}$/
    return regex.test(string)
}

/**
 *  Cette fonction permet de tester si l'activité de l'entreprise  est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function activiteIsValid(string) {
    let regex = /[a-zA-ZÀ-ÿ]{2,}$/
    return regex.test(string)
}