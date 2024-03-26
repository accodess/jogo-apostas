/** Processo no desenvolvimento se SW
 * 1º Passo: Perceber o que se pretende
 * 2º Passo: Criar a interface
 * 3º Passo: Processo de validação de dados/Parser
 * 4º Passo: Resolver o problema... Seja lá o que isto quer dizer
 * 5º Passo: Mostrar resultados
 */
/*window.onload = function () {
  do {
    var answer = prompt("Digita o valor do crédito ");

    document.getElementById("credit").innerHTML = answer;
  } while (answer <= 0 || isNaN(answer) || answer == "");
};*/

function startRace() {
  var bet1 = Number(document.getElementById("txtbet1").value);
  var bet2 = Number(document.getElementById("txtbet2").value);
  var bet3 = Number(document.getElementById("txtbet3").value);
  var credit = Number(document.getElementById("credit").innerHTML);

  //Validação do crédito
  if (credit == 0) {
    alert(
      "O seu crédito acabou, upload pagína para inserir o novo valor do credito!"
    );
    return;
  }
  // Validação se apostas vazias
  if (
    (bet1 == "" || bet1 == 0) &&
    (bet2 == "" || bet2 == 0) &&
    (bet3 == "" || bet3 == 0)
  ) {
    alert("Por favor faça a sua aposta");
    return;
  }
  // Validação a aposta 1 se é número e se é positivo
  if (isNaN(bet1)) {
    alert("O valor da aposta 1 é inválido! \nDigite novamente!");
  }

  if (bet1 < 0 || bet1 > credit) {
    alert(
      "O valor da aposta 1 tem de ser superior a zero e menor ou igual a " +
        credit
    );
    return;
  }

  // Validação a aposta 2 se é número e se é positivo
  if (isNaN(bet2)) {
    alert("O valor da aposta 2 é inválido! \nDigite novamente!");
  }

  if (bet2 < 0 || bet2 > credit) {
    alert(
      "O valor da aposta 2 tem de ser superior a zero e menor ou igual a " +
        credit
    );
    return;
  }

  // Validação a aposta 3 se é número e se é positivo
  if (isNaN(bet3)) {
    alert("O valor da aposta 3 é inválido! \nDigite novamente!");
  }

  if (bet3 < 0 || bet3 > credit) {
    alert(
      "O valor da aposta 3 tem de ser superior a zero e menor ou igual a " +
        credit
    );
    return;
  }

  if (bet1 + bet2 + bet3 > credit) {
    alert(
      "O valor da aposta tem de ser inferior ou igual a seu crédito ( " +
        credit +
        " )\nFaz Novamente a sua aposta!"
    );
    return;
  }
  document.getElementById("credit").innerHTML = credit - (bet1 + bet2 + bet3);

  // Jogadores
  var player1 = document.getElementById("player1");
  var player2 = document.getElementById("player2");
  var player3 = document.getElementById("player3");

  var startPoint = window.innerWidth * 0.1;
  var meta = window.innerWidth * 0.45;

  var position1 = startPoint;
  var position2 = startPoint;
  var position3 = startPoint;

  credit = credit - (bet1 + bet2 + bet3);
  var timer = setInterval(frame, 20);

  function frame() {
    position1 = position1 + 5 * Math.random();
    position2 = position2 + 5 * Math.random();
    position3 = position3 + 5 * Math.random();

    player1.style.left = position1 + "px";
    player2.style.left = position2 + "px";
    player3.style.left = position3 + "px";

    document.getElementById("metros1").innerHTML =
      Math.round((position1 * 100) / meta) + "/100";
    document.getElementById("metros2").innerHTML =
      Math.round((position2 * 100) / meta) + "/100";
    document.getElementById("metros3").innerHTML =
      Math.round((position3 * 100) / meta) + "/100";

    if (position1 >= meta) {
      document.getElementById("vitory1").innerHTML =
        Number(document.getElementById("vitory1").innerHTML) + 1;
      document.getElementById("credit").innerHTML = credit + 2 * bet1;

      alert("O player 1 ganhou!🥳");
      clearInterval(timer);
    }

    if (position2 >= meta) {
      document.getElementById("vitory2").innerHTML =
        Number(document.getElementById("vitory2").innerHTML) + 1;
      document.getElementById("credit").innerHTML = credit + 2 * bet2;

      alert("O player 2 ganhou!🥳 ");
      clearInterval(timer);
    }

    if (position3 >= meta) {
      document.getElementById("vitory3").innerHTML =
        Number(document.getElementById("vitory3").innerHTML) + 1;
      document.getElementById("credit").innerHTML = credit + 2 * bet3;

      alert("O player 3 ganhou!🥳 ");
      clearInterval(timer);
    }
  }
}

// Exercício 1
function alertMensagem() {
  alert("É preciso fazer todos os exercícios para aprender");
}
