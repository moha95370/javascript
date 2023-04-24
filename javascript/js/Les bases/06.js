// Les fonctions

function bonjour(){
    alert('bonjour !');
}

//bonjour();

function ditBonjour(prenom,nom){
    console.log(prenom+' '+nom)
    document.write(
        'Bonjour <strong>'
        + prenom
        + ' '
        + nom
        + '</strong> !<br>'
    );
}

ditBonjour('Hugo','Lie');
ditBonjour('Binta','Niang');

function addition(a,b){
    console.log('Addition de '+a+' + '+b+' = '+(a+b))
}

addition(3,5);
//tester autre méthode

function addition1(a,b){
    return a+b;
}

console.log(addition1(2,3));

//tva

function calculttc(ht,tva =20){
    return ht+(ht*(tva/100));
}

function eurotodollars(euro,taux){
    return taux*euro;
}

console.log('ttc : '+calculttc(100,5.5))
console.log(' dollar :'+eurotodollars(30,1.09))



