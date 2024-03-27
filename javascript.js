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

// Exercício 2
function confirmMessage() {
  let text = "Deseja continuar a realizar os exercícios?";
  let textExer2 = document.getElementById("textExer2");
  if (confirm(text)) {
    textExer2.innerHTML = "Bem Escolido!";
    textExer2.style.color = "#04aa6d";
    textExer2.style.marginTop = "15px";
  } else {
    textExer2.innerHTML = "Já chega de JavaScript";
    textExer2.style.color = "#d2161e";
    textExer2.style.marginTop = "15px";
  }
}

// Exercício 3
function readName() {
  let nameFormando = prompt("Por favor digita o seu nome", "");

  if (nameFormando != null) {
    document.getElementById("textExer3").style.marginTop = "15px";
    document.getElementById("textExer3").innerHTML =
      "O Formando " + nameFormando + " está aprovado!";
  }
}

// Exercício 3
function exercicio4() {
  let nome = document.getElementById("name-4").value;
  let idade = document.getElementById("idade-4").value;

  /* Validações */

  if (nome == "") {
    document.getElementById("nameError-4").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza o seu nome</span>';

    document.getElementById("name-4").style.borderColor = "#d2161e";
  }

  if (idade == "") {
    document.getElementById("idadeError-4").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza a sua idade</span>';
    document.getElementById("idade-4").style.borderColor = "#d2161e";
  }

  if (isNaN(idade)) {
    document.getElementById("idadeError-4").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza corretamente a sua idade</span>';
    document.getElementById("idade-4").style.borderColor = "#d2161e";
  } else if (Number(idade) < 0 || Number(idade) > 130) {
    document.getElementById("idadeError-4").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza a idade entre 0 e 130 anos</span>';
    document.getElementById("idade-4").style.borderColor = "#d2161e";
  }
  if (nome != "" && idade != "" && idade >= 0) {
    document.getElementById("textExer4").innerHTML =
      "O Formando/a " + nome + " tem " + idade + " anos.";
    document.getElementById("textExer4").style.marginTop = "15px";
  }
}

function exercicio4a() {
  document.getElementById("nameError-4").innerHTML = "";
  document.getElementById("name-4").style.borderColor = "#2b2f78";
}

function exercicio4b() {
  document.getElementById("idadeError-4").innerHTML = "";
  document.getElementById("idade-4").style.borderColor = "#2b2f78";
}
