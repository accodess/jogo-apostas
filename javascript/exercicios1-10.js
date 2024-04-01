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
      "O Formando/a " + nameFormando + " está aprovado!";
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
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    document.getElementById("textExer4").innerHTML =
      "O Formando/a " + nome + " tem " + idade + " anos.";
    document.getElementById("textExer4").style.marginTop = "15px";
  }
}

// Limpar erros no nome
function exercicio4a() {
  document.getElementById("nameError-4").innerHTML = "";
  document.getElementById("name-4").style.borderColor = "#2b2f78";
}

// Limpar erros no idade
function exercicio4b() {
  document.getElementById("idadeError-4").innerHTML = "";
  document.getElementById("idade-4").style.borderColor = "#2b2f78";
}

// Exercício 5
function exercicio5() {
  console.log("Eu sou a Alona Costa e sou adepto do Dynamo Kiev");
  document.getElementById("textExer5").innerHTML =
    "Para ver me - abra console ;)";
  document.getElementById("textExer5").style.marginTop = "15px";
}

// Exercício 6
function exercicio6() {
  let nome = document.getElementById("name-6").value;
  let estadoCivil = document.getElementById("estado-civil-6").value;
  let idade = document.getElementById("idade-6").value;
  let altura = document.getElementById("altura-6").value;
  let socioSim = document.getElementById("sim-socio-6").checked;
  let socioNao = document.getElementById("nao-socio-6").checked;
  let email = document.getElementById("email-6").value;

  /* Validações */

  /* Validação do nome*/
  if (nome == "") {
    document.getElementById("nameError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza o seu nome</span>';

    document.getElementById("name-6").style.borderColor = "#d2161e";
  }

  /* Validação do estado civil*/
  if (estadoCivil == "") {
    document.getElementById("civilError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor escolha o seu estado civil</span>';

    document.getElementById("estado-civil-6").style.borderColor = "#d2161e";
  }

  /* Validação da idade*/
  if (idade == "") {
    document.getElementById("idadeError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza a sua idade</span>';
    document.getElementById("idade-6").style.borderColor = "#d2161e";
  }

  if (isNaN(idade)) {
    document.getElementById("idadeError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza corretamente a sua idade</span>';
    document.getElementById("idade-6").style.borderColor = "#d2161e";
  } else if (Number(idade) < 0 || Number(idade) > 130) {
    document.getElementById("idadeError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza a idade entre 0 e 130 anos</span>';
    document.getElementById("idade-6").style.borderColor = "#d2161e";
  }
  /* Validação da altura*/
  if (Number(altura) <= 0 || Number(altura) > 300) {
    document.getElementById("alturaError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza a sua altura (ex: 164)</span>';
    document.getElementById("altura-6").style.borderColor = "#d2161e";
  } else if (isNaN(altura)) {
    /* se o browser n#ao suporta type ) ='number'*/
    document.getElementById("alturaError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza corretamente a sua altura</span>';
    document.getElementById("altura-6").style.borderColor = "#d2161e";
  }

  /* Validação do socio*/
  if (socioSim == false && socioNao == false) {
    document.getElementById("socioError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor faz a sua escolha</span>';
  }

  /* Validação do email*/
  if (email == "") {
    document.getElementById("emailError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza o seu email</span>';

    document.getElementById("email-6").style.borderColor = "#d2161e";
  } else if (!email.includes("@")) {
    document.getElementById("emailError-6").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4">Por favor introduza o seu email corretamente</span>';

    document.getElementById("email-6").style.borderColor = "#d2161e";
  }

  if (
    nome != "" &&
    estadoCivil != "" &&
    idade != "" &&
    idade >= 0 &&
    altura != ""
  ) {
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);

    if (
      (socioSim != "" || socioNao != "") &&
      email != "" &&
      email.includes("@")
    ) {
      document.getElementById("textExer6").innerHTML =
        "O Formando/a " +
        nome +
        " é " +
        estadoCivil +
        "/a, tem " +
        idade +
        " anos e tem altura " +
        altura +
        " cm e é o sócio. Email - " +
        email;
      document.getElementById("textExer6").style.marginTop = "15px";
    }
  }
}

// Limpar erros no nome
function exercicio6a() {
  document.getElementById("nameError-6").innerHTML = "";
  document.getElementById("name-6").style.borderColor = "#2b2f78";
  document.getElementById("name-6").style.forcedColorAdjust = "#fff";
}

// Limpar erros no estado civil
function exercicio6b() {
  document.getElementById("civilError-6").innerHTML = "";
  document.getElementById("estado-civil-6").style.borderColor = "#2b2f78";
}

// Limpar erros na idade
function exercicio6c() {
  document.getElementById("idadeError-6").innerHTML = "";
  document.getElementById("idade-6").style.borderColor = "#2b2f78";
}

// Limpar erros na altura
function exercicio6d() {
  document.getElementById("alturaError-6").innerHTML = "";
  document.getElementById("altura-6").style.borderColor = "#2b2f78";
}

// Limpar erros no sócio
function exercicio6e() {
  document.getElementById("socioError-6").innerHTML = "";
}

// Limpar erros no email
function exercicio6f() {
  document.getElementById("emailError-6").innerHTML = "";
  document.getElementById("email-6").style.borderColor = "#2b2f78";
}

// Exercício 7
function exercicio7() {
  let date = new Date();
  let numDay = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  switch (month) {
    case 0:
      month = "Janeiro";
      break;
    case 1:
      month = "Fevereiro";
      break;
    case 2:
      month = "Março";
      break;
    case 3:
      month = "Abril";
      break;
    case 4:
      month = "Maio";
      break;
    case 5:
      month = "Junho";
      break;
    case 6:
      month = "Julho";
      break;
    case 7:
      month = "Agosto";
      break;
    case 8:
      month = "Setembro";
      break;
    case 9:
      month = "Outubro";
      break;
    case 10:
      month = "Novembro";
      break;
    case 11:
      month = "Dezembro";
      break;
  }
  document.getElementById("textExer7").innerHTML =
    numDay + " de " + month + " de " + year;
  document.getElementById("textExer7").style.marginTop = "15px";
}

// Exercício 8
function exercicio8() {
  let horas = new Date().getHours();
  let textExer8 = document.getElementById("textExer8");

  if (horas >= 5 && horas < 12) {
    textExer8.innerHTML = "Bom dia!";
    textExer8.style.marginTop = "15px";
  } else if (horas >= 12 && horas < 19) {
    textExer8.innerHTML = "Boa tarde!";
    textExer8.style.marginTop = "15px";
  } else {
    textExer8.innerHTML = "Boa noite!";
    textExer8.style.marginTop = "15px";
  }
}

// Exercício 9
function exercicio9() {
  window.print();
}

// Exercício 10
function exercicio10() {
  let url = document.URL;
  document.getElementById("textExer10").innerHTML = url;
  document.getElementById("textExer10").style.marginTop = "15px";
}
