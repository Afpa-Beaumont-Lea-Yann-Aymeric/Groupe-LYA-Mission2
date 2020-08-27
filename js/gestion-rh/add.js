/**
 * @file Manages the feature that add a collaborator
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

/**
 * When the form with id formAddCollab is submit, check if all inputs are valid
 * If all inputs are valid, show an alert with the details of the added collaborator
 * If at least one input is invalid, show where are errors
 * @event formAddCollab#submit
 */
$("#formAddCollab").submit(function (event) {
    event.preventDefault();
    let firstName = $(this).find("input[name=firstName]").val();
    let lastName = $(this).find("input[name=lastName]").val();
    let email = $(this).find("input[name=email]").val();
    let contract = $(this).find("select[name=contract]").val();
    let role = $(this).find("select[name=role]").val();
    let qualification = $(this).find("select[name=qualification]").val();


    // If all inputs are valid, show an alert with details of the new gestion-rh and reset the modal, otherwise show where are the errors
    if (firstNameIsValid(firstName) && lastNameIsValid(lastName) && emailIsValid(email) && contractIsValid(contract) && roleIsValid(role) && qualificationIsValid(qualification)) {
    let msg = "Vous venez d'ajouter le collaborateur suivant :\n" +
        "Prénom : " + firstName + "\n" +
        "Nom : " + lastName + "\n" +
        "E-mail : " + email + "\n" +
        "Contrat : " + contract + "\n" +
        "Rôle : " + role + "\n" +
        "Qualificatiton : " + qualification + "\n\n" +
        "PS : Fonction de test, le collaborateur n'est pas réellement créé.";

        alert(msg);

        $('.inputAddCollab').val("");
        $('.selectAddCollab').val("Choisissez ...");
        $('.inputAddCollab,.selectAddCollab').removeClass('is-valid is-invalid');
        $("#addCollab").modal("hide");
    } else {
        $('.inputAddCollab,.selectAddCollab').each(function () {
            $(this).focusout();
        })
    }
})

/**
 * When an input is focusout, check if the value is valid
 * If the value is valid, add to the input the class is-valid, otherwise add the class is-invalid
 * @event inputAddCollab#focusout
 */
$(".inputAddCollab,.selectAddCollab").focusout(function () {
    let name = $(this).attr('name');
    let functionIsValid = name + 'IsValid';
    if (window[functionIsValid]($(this).val())) {
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
    } else {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
    }
})

/**
 * Test if the firstName is valid <br>
 * Accept all lowercase and uppercase letters
 * @param {string} firstName
 * @return {boolean} - Return true if firstName is valid, return false otherwise
 */
function firstNameIsValid(firstName) {
    let regex = /^[A-Za-z]{2,}$/;
    return regex.test(firstName);
}

/**
 * Test if the lastName is valid<br>
 * Accept all lowercase and uppercase letters
 * @param {string} lastName
 * @return {boolean} - Return true if lastName is valid, return false otherwise
 */
function lastNameIsValid(lastName) {
    let regex = /^[A-Za-z]{2,}$/;
    return regex.test(lastName);
}

/**
 * Test if the email is valid<br>
 * Accept all strings that have a valid email format
 * @param {string} email
 * @return {boolean} - Return true if email is valid, return false otherwise
 */
function emailIsValid(email) {
    let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
}

/**
 * @description Test if the contract is valid<br>
 * Accept all values that are not the default value
 * @param {string} contract
 * @return {boolean} - Return true if contract is valid, return false otherwise
 */
function contractIsValid(contract) {
    return contract !== "Choisissez ...";
}

/**
 * Test if the role is valid<br>
 * Accept all values that are not the default value
 * @param {string} role
 * @return {boolean} - Return true if role is valid, return false otherwise
 */
function roleIsValid(role) {
    return role !== "Choisissez ...";
}

/**
 * Test if the qualification is valid<br>
 * Accept all values that are not the default value
 * @param {string} qualification
 * @return {boolean} - Return true if qualification is valid, return false otherwise
 */
function qualificationIsValid(qualification) {
    return qualification !== "Choisissez ...";
}

