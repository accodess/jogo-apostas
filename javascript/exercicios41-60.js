// Exercício 41
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

// Exercício 42
function exercicio42() {
  let now = new Date();
  let birth = new Date(document.getElementById("date-42").value);

  let yearNow = now.getFullYear();
  let yearOfBirth = birth.getFullYear();
  let monthNow = now.getMonth();
  let monthOfBirth = birth.getMonth();
  let dayNow = now.getDate();
  let dayOfBirth = birth.getDate();
  console.log(yearNow);
  console.log(yearOfBirth);
  console.log(monthNow);
  console.log(monthOfBirth);
  console.log(dayNow);
  console.log(dayOfBirth);

  let idade = 0;
  if (monthOfBirth < monthNow) {
    idade = yearNow - yearOfBirth;
    document.getElementById("textExer42").innerHTML = idade;
  } else if (monthOfBirth == monthNow) {
    if (dayOfBirth < dayNow) {
      idade = yearNow - yearOfBirth;
      document.getElementById("textExer42").innerHTML = idade;
    } else if (dayOfBirth == dayNow) {
      idade = yearNow - yearOfBirth - 1;
      document.getElementById("textExer42").innerHTML = idade;
    }
  } else {
    idade = yearNow - yearOfBirth - 1;
    document.getElementById("textExer42").innerHTML = idade;
  }
}
