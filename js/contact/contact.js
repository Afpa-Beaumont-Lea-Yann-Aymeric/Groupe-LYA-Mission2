/**
 * @file Ce fichier permet de valider le formulaire contacter nous
 */



/**
 * Cette fonction permet de valider un formulaire <br>
 * Sécuriser le formulaire pour que personne ne puisse entrer ce qu'il veut dans notre code
 */

$("#contact").submit(function (event) {
    event.preventDefault();
    let firstname = $(this).find("input[name=firstname]").val();
    let lastname = $(this).find("input[name=lastname]").val();
    let email = $(this).find("input[name=email]").val();
    let message = $(this).find("textarea[name=message]").val();

    let msg = "Vous venez de nous contacter : \n" +
        "firstname : " + firstname + "\n" +
        "lastname : " + lastname + "\n" +
        "email : " + email + "\n" +
        "message : " + message + "\n";

    if (firstnameIsValid(firstname) && lastnameIsValid(lastname) && emailIsValid(email) && messageIsValid(message)) {
        alert(msg)
    } else {
        $('#contact input,textarea').each(function () {
            $(this).focusout();
        })
    }
})

/**
 * Cette fonction permet de pouvoir supprimer une classe <br>
 * Ajouter une classe
 * Voir si les champs sont valides ou non
 */
$("#contact input,textarea").focusout(function () {
    let id = $(this).attr('name');
    let functionisValid = id + 'IsValid';
    if (window[functionisValid]($(this).val())) {
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');


    } else {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid')
    }
})

/**
 * Cette fonction permet de tester si le prénom est valide <br>
 * Respecter le nombre de lettres qui est demander
 * @param {string} string
 * returns {boolean}
 */
function firstnameIsValid(string) {
    let regex = /[a-zA-Z]{2,}$/;
    return regex.test(string);
}

/**
 * Cette fonction nous permet de voir si le nom est valide <br>
 * Respecter le nombre de lettres demander
 * @param {string} string
 * returns {boolean}
 */
function lastnameIsValid(string) {
    let regex = /[a-zA-Z]{2,}$/;
    return regex.test(string);
}

/**
 * Cette fonction teste si l'email de l'utilisateur est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function emailIsValid(string) {
    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(string);
}

/**
 * Cette fonction permet de vérifier si le message que l'utilisateur écrit est valide <br>
 * Respecter le nombre de caractères demander
 * @param {string} string
 * returns {boolean}
 */
function messageIsValid(string) {
    let regex = /[a-zA-ZÀ-ÿ0-9 ?,;.:!-]{2,}$/;
    return regex.test(string);
}