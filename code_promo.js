// Samuel Ethève - www.ethsam.re
// Prix initial barré + affichage de reduction en js

jQuery(document).ready(function() {


jQuery('#TxTCodePromo').change(function(event) { //si le champ TxTCodePromo change
  var codetape = jQuery('#TxTCodePromo').val(); // et si sa valeur

    if (codetape == "PROMO2017"){ // est égale à PROMO2017

      //alors ont manipule le CSS pour la couleur et barrer le prix
      // faire apparaitre le champ qui contiendra le prix remisé
      jQuery('#Total').addClass('style');
      jQuery('#Total').css('color','red');
      jQuery('#Total').css('text-decoration','line-through');
      jQuery('#TotalRdiv').css('visibility','');

      //Ont récupére le montant total ont éffectue le calcul pour la réduc de 50%
      var p = jQuery("span#Total").text();
      var f = parseFloat(p).toFixed(2);
      var g = (f / 100);
      var e = (g * 50).toFixed(2);
      jQuery('#TotalR').html(e + " €");

      //et ont affiche le resultat

    }

  });

});
