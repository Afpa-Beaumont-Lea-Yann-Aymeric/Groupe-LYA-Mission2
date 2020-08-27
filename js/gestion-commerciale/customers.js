/**
 * @file Se fichier contient les informations concernant les clients
 */

/**
 * Cette fonction nous permet d'afficher des  données qui vont etre afficher dans notre navigateur
 */
$.each(customers, function (i, customer) {
    let row = '<tr>\n' +
        '<td class="idClient">' + customer.idClient + '</td>\n' +
        '<td class="raisonsocial">' + customer.raisonSociale + '</td>\n' +
        '<td class="siret">' + customer.siret + '</td>\n' +
        '<td class="ville">' + customer.ville + '</td>\n' +
        '<td class="zip">' + customer.codePostal + '</td>\n' +
        '<td class="address">' + customer.adresse + '</td>\n' +
        '<td class="pays">' + customer.pays + '</td>\n' +
        '<td class="activite">' + customer.activite + '</td>\n' +
        '<td class="action"><button class="btn btn-primary details">Détails</button></td>'

    $("#listcustomers tbody").append(row);

})


/**
 * Cette fonction nous permet de détailler ce qui se trouve dans le tableau <br>
 * Afficher les informations des clients
 */

$(".details").click(function () {
    let tr = $(this).parent("td").parent("tr")
    let idClient = tr.children(".idClient").text();
    let raisonsocial = tr.children(".raisonsocial").text();
    let siret = tr.children(".siret").text();
    let ville = tr.children(".ville").text();
    let zip = tr.children(".zip").text();
    let address = tr.children(".address").text();
    let pays = tr.children(".pays").text();
    let activite = tr.children(".activite").text();

    let msg = 'idClient'+ idClient + '\n' +
        'Raison Social'+ raisonsocial + '\n'+
        'Siret' + siret + '\n'+
        'Ville' + ville + '\n' +
        'Code Postal' + zip +  '\n' +
        'Adresse' + address + '\n' +
        'Pays' + pays + '\n' +
        'Activité' + activite + '\n';


    console.log(idClient);
    console.log(raisonsocial);
    console.log(siret);
    console.log(ville);
    console.log(zip);
    console.log(address);
    console.log(pays);
    console.log(activite);
    alert(msg);


})