var nome = "Solange De Zorzi";
var cargo="CTO - Grwdev"

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1= document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
  cargoHTML.innerHTML = cargo;
  }

function logarNome() {
  console.log(nome);
}

function cliqueNoProjetos(){
  console.log("clicou no botão projetos");
  texto2.style.display = "block";
  texto1.style.display = "none";
}

function cliqueNoSobre() {
  console.log("clicou no botão sobre");
  texto1.style.display = "block";
  texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtmal(cargo);