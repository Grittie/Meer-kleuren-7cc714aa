function achtergrondKleur(){
    achtergrond = document.getElementById("color").value ;
    console.log(achtergrond);
}

function titelKleur(){
    titel = document.getElementById("color").value;
    console.log(titel);
}

function kleurToepassen(){
    document.body.style.backgroundColor = achtergrond;
    document.getElementById("h1").style.color = titel;
}

// function colorFunction(){
//     var kleur = document.getElementById("color").value;
//     console.log(kleur);
//     document.body.style.backgroundColor = kleur;
// }