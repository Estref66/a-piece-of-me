var chose1;
var chose2;
var chose3;

document.getElementById("btChangerListe").onclick = saisirListe;

function saisirListe() {
  chose1 = prompt("What is one thing you love?");
  chose2 = prompt("What is another thing you love?");
  chose3 = prompt("And one last thing you love?");

  actualiserListe();
}

function actualiserListe() {
  if (chose1 !== null && chose1 !== "") {
    document.getElementById("acti1").innerHTML = chose1;
  }

  if (chose2 !== null && chose2 !== "") {
    document.getElementById("acti2").innerHTML = chose2;
  }

  if (chose3 !== null && chose3 !== "") {
    document.getElementById("acti3").innerHTML = chose3;
  }
}
