const name = document.getElementById("name");
const surname = document.getElementById("surname");
const dataNascita = document.getElementById("dataNascita");
const bottone = document.getElementById("bottone");

const rigaUno = document.getElementById("uno");
const rigaDue = document.getElementById("due");
const rigaTre = document.getElementById("tre");

let Person = function (name, surname, dataNascita) {
  this.name = name;
  this.surname = surname;
  this.dataNascita = dataNascita;
};

let user1 = new Person(name, surname, dataNascita);

bottone.onclick = function () {
  user1.name = name.value;
  user1.surname = surname.value;
  user1.dataNascita = dataNascita.value;

  rigaUno.innerHTML = user1.name;
  rigaDue.innerHTML = user1.surname;
  rigaTre.innerHTML = user1.dataNascita;
};
