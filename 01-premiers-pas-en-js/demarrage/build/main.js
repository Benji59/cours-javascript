"use strict";

var nom = "Regina";
var url = "images/".concat(nom.toLowerCase(), ".jpg");
var html = "<a href=\"".concat(url, "\">\n              <img src=\"").concat(url, "\"/>\n              <h4>").concat(nom, "</h4></a>");
console.log(html); // document.querySelector(".pizzasContainer").innerHTML = html;

var data = ['Regina', 'Napolitaine', 'Spicy']; // Parcours du tableau avec une boucle

/* for (let i = 0; i < data.length; i++) {
  document.querySelector(".pizzasContainer").innerHTML += `
    <a href="images/${ data[i].toLowerCase() }.jpg">
        <img src="images/${ data[i].toLowerCase() }.jpg"/>
        <h4>${ data[i] }</h4>
    </a>
  `;
} */
// Parcours du tableau avec la méthode forEach

/* data.forEach(function(element) {
  document.querySelector(".pizzasContainer").innerHTML += `
    <a href="images/${ element.toLowerCase() }.jpg">
        <img src="images/${ element.toLowerCase() }.jpg"/>
        <h4>${ element }</h4>
    </a>
  `;
}) */
// Parcours du tableau avec les méthodes map et join

/* const map1 = data.map(x =>
  `<a href="images/${ x.toLowerCase() }.jpg">
      <img src="images/${ x.toLowerCase() }.jpg"/>
      <h4>${ x }</h4>
  </a>`
);
document.querySelector(".pizzasContainer").innerHTML = map1.join(' ');
*/

data = [{
  nom: 'Regina',
  base: 'tomate',
  prix_petite: 5.5,
  prix_grande: 7.5
}, {
  nom: 'Napolitaine',
  base: 'tomate',
  prix_petite: 6.2,
  prix_grande: 8
}, {
  nom: 'Spicy',
  base: 'tomate',
  prix_petite: 6.5,
  prix_grande: 9.95
}];

for (var i = 0; i < data.length; i++) {
  document.querySelector(".pizzasContainer").innerHTML += "\n    <article class=\"media\">\n      <a href=\"images/".concat(data[i].nom.toLowerCase(), ".jpg\">\n        <img src=\"images/").concat(data[i].nom.toLowerCase(), ".jpg\"/>\n        <section class=\"infos\">\n          <h4>").concat(data[i].nom, "</h4>\n          <ul>\n            <li>Prix petit format : ").concat(data[i].prix_petite.toFixed(2), " \u20AC</li>\n            <li>Prix grand format : ").concat(data[i].prix_grande.toFixed(2), " \u20AC</li>\n          </ul>\n        </section>\n      </a>\n    </article>\n    ");
}