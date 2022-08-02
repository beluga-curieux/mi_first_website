var btn = document.getElementById('button');
var a = 0;

const title = document.getElementById("title");
const elt = document.getElementById('button');    // On récupère l'élément sur lequel on veut détecter le clic


elt.addEventListener('click', function() {          // On écoute l'événement click
    a ++;    // On change le contenu de notre élément pour afficher "C'est cliqué !"
    elt.innerHTML = a;           
    title.innerHTML = a;
    let rndCol = [random(255) , random(255) , random(255)];
    
    document.body.style.backgroundColor = 'rgb(' + (255 - rndCol[0]) + ',' +( 255 - rndCol[1]) + ',' + (255 - rndCol[2]) + ')';
    elt.style.backgroundColor = 'rgb(' + rndCol[0] + ',' + rndCol[1] + ',' + rndCol[2] + ')';
    elt.style.color = 'rgb(' + (255 - rndCol[0]) + ',' +( 255 - rndCol[1]) + ',' + (255 - rndCol[2]) + ')';
    
    console.log(rndCol);
    console.log('rgb(' + (255 - rndCol[0]) + ',' +( 255 - rndCol[1]) + ',' + (255 - rndCol[2]) + ')')
    console.log(a);
});
function func() {
    
}
function random(number) {
    return Math.floor(Math.random()*(number+1));
  }
var textToSave = 'this is a test';

