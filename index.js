const name = document.getElementById("name");
const surname = document.getElementById("surname");
const dataNascita = document.getElementById("dataNascita");
const bottone = document.getElementById("bottone");

const rigaUno = document.getElementById("uno");
const rigaDue = document.getElementById("due");
const rigaTre = document.getElementById("tre");

let Person = function () {
  this.name = " ";
  this.surname = " ";
  this.dataNascita = " ";
};

let user1 = new Person();
console.log(user1);
