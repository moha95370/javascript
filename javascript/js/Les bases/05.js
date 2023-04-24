/* consigne : en vous appuyant sur le tableau suivant.
afficher sur votre page à l'aide du HTML, la fiche de contact de John Doe.
bonus : vous pouvez utiliser bootstrap */

var contact = [
    {
        prenom: 'John',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'john.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 45 56 18 09',
            }
        }
    },
    {
        prenom: 'Jane',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'jane.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 54 65 09 17 78',
            }
        }
    }
];

var prenom = contact[0].prenom;
var nom = contact[0].nom;
var adresse = contact[0].coordonnees.adresse.rue;
var cp = contact[0].coordonnees.adresse.cp;
var email = contact[0].coordonnees.email;
document.write('<h1>Fiche de contact</h1>');
document.write(' Prénom :'+prenom+'<br>');
document.write(' Nom :'+nom+'<br>');
document.write(' Adresse :'+adresse+'<br>');
document.write(' cp :'+cp+'<br>');
document.write(' E-mail :'+email+'<br>');
