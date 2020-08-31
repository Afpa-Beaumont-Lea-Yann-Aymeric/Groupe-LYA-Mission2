

function init () {
    if (!localStorage.getItem('clients')){
        localStorage.setItem('clients', JSON.stringify(clients));
    }

    let registerClients = JSON.parse(localStorage.getItem('clients'));
    console.log(registerClients.length);

    console.log(registerClients);

    if (!localStorage.getItem('collaborateurs')){
        localStorage.setItem('collaborateurs', JSON.stringify(collaborateurs));
    }

    let registerCollabo = JSON.parse(localStorage.getItem('collaborateurs'));
    console.log(registerCollabo.length);

    console.log(registerCollabo);

}