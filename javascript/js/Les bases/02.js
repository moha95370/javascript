// déclaration notre tableau indexé
var apprenants = [];
var learners = new Array;

apprenants[0] = 'Hugo';
apprenants[1] = 'Mathieu';
apprenants[2] = 'Binta';

console.log(apprenants);

apprenants = ['Omar', 'Pierre', 'Patrick', 'Yoann'];
console.log(apprenants);
console.log(apprenants[1]);

// créer un objet en javascript

var apprenant = {
    //Propriété  :  valeur
    prenom: 'Hugo',
    nom: 'Liegeard',
    age: 35
};

console.clear();
console.log(apprenant);
console.log(apprenant['prenom']);
console.log(apprenant.prenom);

// la deuxieme dimension

var annuaireDesApprenants = [
    { prenom: 'Hugo', nom: 'Liegead', age: 33 },
    { prenom: 'Hugo2', nom: 'Liegead2', age: 23 },
];

console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1].prenom);

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

// Afficher le prénom et le pays de John : 
console.log(contact[0].prenom);
console.log(contact[0].coordonnees.adresse.pays.nom);
console.log('-----------');
console.log(contact[1].prenom);
console.log(contact[1].coordonnees.adresse.pays.nom);

/* ---------------------
        consigne
  Réaliser une stucture JSON, permettant
  destocker des recettes de cuisine.
  ----------------------------------------*/

  var recettes = [
    {
        nom: 'Poulet au four',
        nbPersonnes: 12,
        difficulte: 'Facile',
        specialite: 'Française',
        categorie: 'Plat',
        sousCategorie: 'Viande',
        duree: {
            preparation: 40,
            cuisson: 60,
            repos: null,
        },
        cuisson: {
            prechauffe: 200,
            temperature: 200,
            mode: 'Chaleur Tournante'
        },
        ingredients: [
            {nom: 'Poulet Entier', qte: 6, unite: 'pièce', image: 'https://www..........'},
            {nom: 'Poivre', qte: 10, unite: 'g', image: 'https://www..........'},
            {nom: 'Sel', qte: 20, unite: 'g', image: 'https://www..........'},
            {nom: 'Piment Végétarien', qte: 4, unite: 'pièce', image: 'https://www..........'},
            {nom: 'Jus de Citron', qte: 10, unite: 'cl', image: 'https://www..........'},
        ],
        ustensiles: [
            {nom: 'Plat Rectangle ou Rond', qte: 6, image: 'https://www..........'},
        ],
        instructions: [
            {
                description: 'Commencez par commander les poulets',
                photoUrl: 'https://www..........'
            },
            {
                description: 'Nettoyer le poulet',
                photoUrl: 'https://www..........'
            },
        ]
    },

];

console.log(recettes[0]);

console.clear();
var couleurs = ['rouge','Jaune','vert'];
couleurs.push('Bleu');
console.log(couleurs);

couleurs.unshift('Orange');
console.log(couleurs);


var monDernierElement = couleurs.pop();
console.log(monDernierElement);
console.log(couleurs);


