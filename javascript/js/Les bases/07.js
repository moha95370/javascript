function profil(){
    var prenom = prompt("Saisir ton Prénom?","<Votre prénom>");
    //        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
    var age = parsentInt(prompt("Bonjour "+prenom+", Quel age as-tu ?","<Votre age>"));
    //- Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
    const today = new Date();
    const year = today.getFullYear();
    var annee=year-age;
    alert('Tu est donc né en '+annee);
    document.write('Bonjour '+prenom+', tu as '+age+' ans');
}

    // Bonjour [PRENOM], tu as [AGE] !
profil();

/*version hugo
// -- 1. Création de la fonction
function presentation() {

    // -- 2. Demander a l'utilisateur son prénom via un prompt.
    var prenom = prompt("Quel est votre prénom ?", "<Votre prénom>"); 

    // -- 3. Demander son age à l'utilisateur ?
    var age = parseInt(prompt("Bonjour " + prenom + ". Quel est votre age ?", "<Votre age>"));
    console.log( age );
    console.log( typeof age );

    // -- 4. Calculer son année de naissance
    var date = new Date();
    var anneeActuelle = date.getFullYear();
    var dateDeNaissance = anneeActuelle - age;

    // -- 5. Afficher le récapitulatif
    document.write("Bonjour " + prenom + ", tu es né en " + dateDeNaissance + " !");

}

presentation();
*/


document.querySelector(".example").style.backgroundColor = "red";