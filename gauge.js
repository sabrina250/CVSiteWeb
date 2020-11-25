


function createJauge(elem) {
  if (elem) {
    // on commence par un clear
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
    // création des éléments
    
    var oMask  = document.createElement('DIV');
    var oBarre = document.createElement('DIV');
    var oSup50 = document.createElement('DIV');
    // affectation des classes
    
    oMask.className  = 'progress-masque';
    oBarre.className = 'progress-barre';
    oSup50.className = 'progress-sup50';
    // construction de l'arbre
    oMask.appendChild(oBarre);
    oMask.appendChild(oSup50);
    elem.appendChild(oMask);
  }
  return elem;
}

// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  var oJauges = document.querySelectorAll('.progress-circle');
  var i, nb = oJauges.length;
  for( i=0; i < nb; i +=1){
    createJauge(oJauges[i]);
  }
});




function initJauge(elem) {
  
  var oBarre;
  var angle;
  var valeur;
  var oMask;
  //
  createJauge( elem);
  oMask = elem.querySelectorAll('.progress-masque');
  oBarre = elem.querySelector('.progress-barre');
  valeur = elem.getAttribute('data-value');
  valeur = valeur ? valeur * 1 : 0;
  elem.setAttribute('data-value', valeur.toFixed(1));
  angle = 360 * valeur / 100;
  
  if ( oBarre) {
    
    oBarre.style.transition = '2s ';
    oBarre.style.transform = 'rotate(' + angle + 'deg)';
    
  }
  
}




// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
  var oJauges = document.querySelectorAll('.progress-circle');
  var i, nb = oJauges.length;
  for (i = 0; i < nb; i += 1) {
    initJauge(oJauges[i]);
    
  }
});


