// Exercício 39
function exercicio41() {
  const days = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
  ];
  let day = new Date(document.getElementById("date-41").value);
  let dayOfTheWeek = days[day.getDay()];
  document.getElementById("textExer41").innerHTML = dayOfTheWeek;
}
