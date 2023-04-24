// 1. A la soumission du formulaire
const form = document.querySelector('#contact');
form.addEventListener('submit', function (event) {

    // Bloquer le rechargement de la page.
    event.preventDefault();

    // Réinitialiser les erreurs
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
    }

    // Déclaration des variables
    const titre =  document.querySelector('h1');
    const sujet =  document.querySelector('#sujet');
    const email =  document.querySelector('#email');
    const message =  document.querySelector('#message');

    // Vérifier si l'un des 3 champs n'a pas été remplis.
    if (sujet.value === '' ||  checkEmail(email.value) == false ||  message.value === '' ) {
    //if( sujet.value.length === 0 ||  email.value === 0 ||  message.value === 0 ) {
        titre.parentNode.insertBefore(
            createAlert('danger', "Oops, merci de bien remplir vos champs !"),
            titre.nextSibling
            
        );
        validate();
    } else {
        titre.parentNode.insertBefore(
            createAlert('success', "Merci, votre message à bien été transmis"),
            titre.nextSibling
        );
        validate();



    }
});

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Adresse e-mail valide');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}

/**
 * Permet de créer une alerte bootstrap
 * @param type
 * @param message
 */
function createAlert(type, message) {
    const div = document.createElement('div');
    div.className = 'alert alert-'+ type;
    div.textContent = message
    return div;
}