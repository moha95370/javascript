//les conditions

/*var majoriteLegalFr = 18;

if (19>=majoriteLegalFr){
    alert("Bienvenue sur mon site !");
}

if (14>=majoriteLegalFr){
    alert("Bienvenue sur mon site !");
} else if (17==majoriteLegalFr){
    alert('c\'est un peu juste non ?');
} else{
    alert("va voir chez google");
}*/

/*
    exercice : créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    s'in a la majorité légale, alors je lui souhaite la bienvenue sur monsite.
    en revanche, s'il ne l'a pas, je le redirige sur google, apres l'avoir informé du soucis.
        */
/*
function limiteage(){
    var majoriteLegalFr = 18;
    var age = parseInt(prompt("Saisir votre age?","<Votre age>"));
    if (age>=majoriteLegalFr){
        alert("Bienvenue sur mon site !");
    } else{
        alert("va voir chez google");
        location.href ='http://www.google.fr';
    }
}  

limiteage();

*/

/* ----------------------------------------------------------------------
    EXERCICE : http://sharemycode.fr/consigne
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// -- BASE DE DONNEES

const USER_EMAIL = "hugo@greta.fr";
const USER_PASS = "greta";

function identifiant(email,pass){
    
    const email2 = prompt("Saisir votre email?","<Votre email>");
    const pass2 = prompt("Saisir votre mot de passe?","<Votre mot de passe>");
    
    if(email2===email && pass2===pass){
        alert("Bienvenue");
    } else{
        alert("Problème de saisie");
    }
}

identifiant(USER_EMAIL,USER_PASS);

