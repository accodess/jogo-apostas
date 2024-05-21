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

// Exercício 43
function exercicio43() {
  let precoCerto = document.getElementById("precoCerto-43").value;
  let aposta1 = document.getElementById("aposta1-43").value;
  let aposta2 = document.getElementById("aposta2-43").value;
  let aposta3 = document.getElementById("aposta3-43").value;
  let diferenca1 = 0;
  let diferenca2 = 0;
  let diferenca3 = 0;
  let menorDiferenca = Infinity;
  let vencedor;

  let formOk = true;

  // Verificamos introdução do preço
  if (isNaN(precoCerto)) {
    document.getElementById("precoCertoError-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("precoCerto-43").style.borderColor = "#d2161e";
  }
  if (precoCerto == "") {
    document.getElementById("precoCertoError-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("precoCerto-43").style.borderColor = "#d2161e";
  }

  // Verificamos introdução da aposta 1
  if (isNaN(aposta1)) {
    document.getElementById("aposta1Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("aposta1-43").style.borderColor = "#d2161e";
  }
  if (aposta1 == "") {
    document.getElementById("aposta1Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("aposta1-43").style.borderColor = "#d2161e";
  }

  // Verificamos introdução da aposta 2
  if (isNaN(aposta2)) {
    document.getElementById("aposta2Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("aposta2-43").style.borderColor = "#d2161e";
  }
  if (aposta2 == "") {
    document.getElementById("aposta2Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("aposta2-43").style.borderColor = "#d2161e";
  }

  // Verificamos introdução da aposta 3
  if (isNaN(aposta3)) {
    document.getElementById("aposta3Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("aposta3-43").style.borderColor = "#d2161e";
  }
  if (aposta3 == "") {
    document.getElementById("aposta3Error-43").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("aposta3-43").style.borderColor = "#d2161e";
  }

  diferenca1 = Number(precoCerto - aposta1);
  diferenca2 = Number(precoCerto - aposta2);
  diferenca3 = Number(precoCerto - aposta3);
  console.log(diferenca1, diferenca2, diferenca3);

  if (formOk) {
    if (diferenca1 >= 0 && diferenca1 < menorDiferenca) {
      menorDiferenca = diferenca1;
    }
    if (diferenca2 >= 0 && diferenca2 < menorDiferenca) {
      menorDiferenca = diferenca2;
    }
    if (diferenca3 >= 0 && diferenca3 < menorDiferenca) {
      menorDiferenca = diferenca3;
    }
    vencedor = precoCerto - menorDiferenca;

    if (vencedor >= 0) {
      document.getElementById(
        "textExer43"
      ).innerHTML = `Aposta com o valor ${vencedor} ganhou.  Parabéns!! 🥳`;
    } else {
      document.getElementById("textExer43").innerHTML = `Ninguém acertou 😐`;
    }
  }
}

// Limpar erros no preço
function exercicio43a() {
  document.getElementById("precoCertoError-43").innerHTML = " ";
  document.getElementById("precoCerto-43").style.borderColor = "#2b2f78";
}

// Limpar erros na aposta1
function exercicio43b() {
  document.getElementById("aposta1Error-43").innerHTML = " ";
  document.getElementById("aposta1-43").style.borderColor = "#2b2f78";
}

// Limpar erros na aposta2
function exercicio43c() {
  document.getElementById("aposta2Error-43").innerHTML = " ";
  document.getElementById("aposta2-43").style.borderColor = "#2b2f78";
}

// Limpar erros na aposta3
function exercicio43d() {
  document.getElementById("aposta3Error-43").innerHTML = " ";
  document.getElementById("aposta3-43").style.borderColor = "#2b2f78";
}

// Exercício 44
function exercicio44() {
  let votos1 = document.getElementById("votos1-44").value;
  let votos2 = document.getElementById("votos2-44").value;
  let votos3 = document.getElementById("votos3-44").value;

  let formOk = true;

  // Verificamos introdução do votod do 1º candidato
  if (isNaN(votos1)) {
    document.getElementById("votos1Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("votos1-44").style.borderColor = "#d2161e";
  }
  if (votos1 == "") {
    document.getElementById("votos1Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("votos1-44").style.borderColor = "#d2161e";
  }

  // Verificamos introdução do votod do 2º candidato
  if (isNaN(votos2)) {
    document.getElementById("votos2Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("votos2-44").style.borderColor = "#d2161e";
  }
  if (votos2 == "") {
    document.getElementById("votos2Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("votos2-44").style.borderColor = "#d2161e";
  }

  // Verificamos introdução do votod do 3º candidato
  if (isNaN(votos3)) {
    document.getElementById("votos3Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("votos3-44").style.borderColor = "#d2161e";
  }
  if (votos3 == "") {
    document.getElementById("votos3Error-44").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("votos3-44").style.borderColor = "#d2161e";
  }

  if (formOk) {
    if (votos1 > votos2 && votos1 > votos3) {
      document.getElementById(
        "textExer44"
      ).innerHTML = `O 1º candidadto ganhou com ${votos1} votos!`;
    } else if (votos2 > votos2 && votos2 > votos3) {
      document.getElementById(
        "textExer44"
      ).innerHTML = `O 2º candidadto ganhou com ${votos2} votos!`;
    } else if (votos3 > votos1 && votos3 > votos2) {
      document.getElementById(
        "textExer44"
      ).innerHTML = `O 3º candidadto ganhou com ${votos3} votos!`;
    } else {
      document.getElementById("textExer44").innerHTML = `Houve um impate`;
    }
  }
}

// Limpar erros na votos do candidato 1
function exercicio44a() {
  document.getElementById("votos1Error-44").innerHTML = " ";
  document.getElementById("votos1-44").style.borderColor = "#2b2f78";
}

// Limpar erros na votos do candidato 2
function exercicio44b() {
  document.getElementById("votos2Error-44").innerHTML = " ";
  document.getElementById("votos2-44").style.borderColor = "#2b2f78";
}

// Limpar erros na votos do candidato 3
function exercicio44c() {
  document.getElementById("votos3Error-44").innerHTML = " ";
  document.getElementById("votos3-44").style.borderColor = "#2b2f78";
}

// Exercício 45
function exercicio45() {
  // Gerar os números aleatórios
  let numeros = [];
  for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 20) + 1);
  }

  //Contar ocorrências
  let ocorrencias = [];
  for (let i = 0; i < numeros.length; i++) {
    let numeroAtual = numeros[i];

    let cont = 0;
    for (let j = 0; j < numeros.length; j++) {
      if (numeros[j] === numeroAtual) {
        cont++;
      }
    }
    let found = ocorrencias.find((num) => {
      return num == numeroAtual;
    });
    if (found == undefined) {
      ocorrencias.push(numeroAtual, cont);
    }
  }

  let text = "";
  for (let num in ocorrencias) {
    if (num % 2 == 0) {
      text += ocorrencias[num] + "&nbsp; : &nbsp;";
    }
    if (num % 2 != 0) {
      text += ocorrencias[num] + "  <br>";
    }
  }
  document.getElementById(
    "textExer45"
  ).innerHTML = `Nº&nbsp; :  &nbsp;Ocorrências <br> ${text}`;
}

// Exercício 46
function exercicio46() {
  let numbers = [];
  let uniqueNumbers = [];
  let resultado = "";

  // Preenchemos array com números aleatórios
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }

  // Verificar se o cada número do array é unico
  numbers.forEach((number) => {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  });

  // Apresentar o resultado
  resultado += `Números únicos: <br>`;
  document.getElementById("textExer46").innerHTML = resultado;

  uniqueNumbers.forEach((number) => {
    resultado += number + " ";
    console.log(number);
    document.getElementById("textExer46").innerHTML = resultado;
  });
}

// Exercício 47
function exercicio47() {
  let numbers = [];
  let frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentNumber;

  // Preenchemos array com números aleatórios
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(numbers);

  // Encontrar o número com maior frequência
  numbers.forEach((number) => {
    if (!frequencyMap[number]) {
      frequencyMap[number] = 1;
    } else {
      frequencyMap[number]++;
    }
    console.log(frequencyMap[number]);
    if (frequencyMap[number] > maxFrequency) {
      maxFrequency = frequencyMap[number];
      mostFrequentNumber = number;
    }
  });

  //Apresentar o resultado
  document.getElementById(
    "textExer47"
  ).innerHTML = `Números que occore mais vezes: ${mostFrequentNumber}`;
}

// Exercício 48
function exercicio48() {
  let numero = document.getElementById("numero-48").value;
  let formOk = true;
  let resultado = "";

  // Verificamos introdução do número
  if (isNaN(numero)) {
    document.getElementById("numeroError-48").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numero-48").style.borderColor = "#d2161e";
  }
  if (numero == "") {
    document.getElementById("numeroError-48").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("numero-48").style.borderColor = "#d2161e";
  } else if (numero.length < 4) {
    document.getElementById("numeroError-48").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número maior que 1000!</span>';
    formOk = false;
    document.getElementById("numero-48").style.borderColor = "#d2161e";
  }

  if (formOk) {
    console.log(numero.length);
    for (let i = 0; i < numero.length; i++) {
      console.log(resultado);
      if (
        i < numero.length - 1 &&
        parseInt(numero[i]) % 2 == 0 &&
        parseInt(numero[i + 1]) % 2 == 0
      ) {
        resultado += numero[i] + "-";
        console.log(numero[i]);
      } else {
        resultado += numero[i];
      }
    }
    document.getElementById("textExer48").innerHTML = resultado;
  }
}

// Limpar erros no número
function exercicio48a() {
  document.getElementById("numeroError-48").innerHTML = " ";
  document.getElementById("numero-48").style.borderColor = "#2b2f78";
}

// Exercício 49
function exercicio49() {
  let numeros1 = [];
  let numeros2 = [];
  let resultado = [];
  let texto = "";

  // Preenchemos arrays com números aleatórios
  for (let i = 0; i < 10; i++) {
    numeros1.push(Math.floor(Math.random() * 10) + 1);
    numeros2.push(Math.floor(Math.random() * 10) + 1);
  }

  for (let i = 0; i < numeros1.length; i++) {
    resultado.push(numeros1[i] + numeros2[i]);
  }

  //Apresentar o resultado
  texto += "Array 1: &nbsp;" + numeros1 + "<br>";
  texto += "Array 2: &nbsp;" + numeros2 + "<br>";
  texto += "Soma dos valores do arrays: ";

  resultado.forEach((numero) => {
    texto += numero + " ";
  });
  document.getElementById("textExer49").innerHTML = texto;
}

// Exercício 50
function exercicio50() {
  let matriz = [];
  let quantidade = 0;
  let resultado = "";

  let tabela = document.getElementById("matrizTabela50");
  tabela.style.visibility = "visible";
  tabela.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let linha = [];
    for (let j = 0; j < 10; j++) {
      linha.push(Math.floor(Math.random() * 100) + 1);
    }
    matriz.push(linha);
  }

  for (let i = 0; i < matriz.length; i++) {
    let linha = document.createElement("tr");
    for (let j = 0; j < matriz[i].length; j++) {
      let celula = document.createElement("td");
      celula.textContent = matriz[i][j];
      linha.appendChild(celula);
    }
    tabela.appendChild(linha);
  }

  matriz.forEach((linha) => {
    linha.forEach((numero) => {
      if (numero >= 10 && numero <= 20) {
        quantidade++;
      }
    });
  });

  document.getElementById(
    "textExer50"
  ).innerHTML = `Quantidade de elementos entre 10 e 20 &rarr; ${quantidade} números.`;
  document.getElementById("textExer50").style.marginTop = "15px";
}

// Exercício 51
function exercicio51() {
  let frase = document.getElementById("frase-51").value;
  let formOk = true;
  let resultado = "";

  // Verificamos introdução da frase
  if (frase == "") {
    document.getElementById("fraseError-51").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza a palavra-passe!</span>';
    formOk = false;
    document.getElementById("frase-51").style.borderColor = "#d2161e";
  }

  if (formOk) {
    resultado = frase.replace(/[^\w\s]/gi, "");
    document.getElementById("textExer51").innerHTML = resultado;
  }
}

// Limpar erros no número
function exercicio51a() {
  document.getElementById("fraseError-51").innerHTML = " ";
  document.getElementById("frase-51").style.borderColor = "#2b2f78";
}

// Exercício 52
function exercicio52() {
  let numero = parseInt(document.getElementById("numero-52").value);
  let formOk = true;
  let resultado = "";

  // Verificamos introdução do número
  if (isNaN(numero)) {
    document.getElementById("numeroError-52").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numero-52").style.borderColor = "#d2161e";
  }
  if (numero == "") {
    document.getElementById("numeroError-52").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("numero-52").style.borderColor = "#d2161e";
  }

  if (formOk) {
    resultado = (numero >>> 0).toString(2);
    document.getElementById(
      "textExer52"
    ).innerHTML = `Número decimal: &nbsp; ${numero} <br> Número binário: &nbsp; ${resultado}`;
  }
}

// Limpar erros no número
function exercicio52a() {
  document.getElementById("numeroError-52").innerHTML = " ";
  document.getElementById("numero-52").style.borderColor = "#2b2f78";
}

// Exercício 53
function exercicio53() {
  let novaCor = corAleatoria();
  document.body.style.backgroundColor = novaCor;
}

// Criar Cor aleatória
function corAleatoria() {
  let letras = "0123456789ABCDEF";
  let cor = "#";

  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

// Exercício 54
function exercicio54() {
  let numero = document.getElementById("numero-54").value;
  numero = numero.toUpperCase();
  console.log(numero);
  console.log(numero.length);
  let formOk = true;
  let cor = "#";

  // Verificamos introdução do número
  if (numero.includes("/[^ws]/gi")) {
    document.getElementById("numeroError-54").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Digita os valores apresentados!</span>';
    formOk = false;
    document.getElementById("numero-54").style.borderColor = "#d2161e";
  }
  if (numero == "") {
    document.getElementById("numeroError-54").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("numero-54").style.borderColor = "#d2161e";
  } else if (numero.length < 6) {
    document.getElementById("numeroError-54").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza 6 caracteres!</span>';
    formOk = false;
    document.getElementById("numero-54").style.borderColor = "#d2161e";
  } else if (numero.length >= 7) {
    document.getElementById("numeroError-54").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza no máximo 6 caracteres!</span>';
    formOk = false;
    document.getElementById("numero-54").style.borderColor = "#d2161e";
  } else if (
    numero.includes("G") ||
    numero.includes("H") ||
    numero.includes("I") ||
    numero.includes("J") ||
    numero.includes("K") ||
    numero.includes("L") ||
    numero.includes("M") ||
    numero.includes("N") ||
    numero.includes("O") ||
    numero.includes("P") ||
    numero.includes("Q") ||
    numero.includes("R") ||
    numero.includes("S") ||
    numero.includes("T") ||
    numero.includes("U") ||
    numero.includes("V") ||
    numero.includes("W") ||
    numero.includes("X") ||
    numero.includes("Y") ||
    numero.includes("Z")
  ) {
    document.getElementById("numeroError-54").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza só caracteres apresentados!</span>';
    formOk = false;
    document.getElementById("numero-54").style.borderColor = "#d2161e";
  }

  if (formOk) {
    cor += numero;
    document.getElementById("paragrafo54").style.backgroundColor = cor;
  }
}

// Limpar erros no número
function exercicio54a() {
  document.getElementById("numeroError-54").innerHTML = " ";
  document.getElementById("numero-54").style.borderColor = "#2b2f78";
}

// Exercício 55
function exercicio55() {
  let numLinhas = document.getElementById("numeroLinhas-55").value;
  let numColunas = document.getElementById("numeroCol-55").value;
  let formOk = true;

  // Verificamos introdução do número
  if (isNaN(numLinhas)) {
    document.getElementById("numeroLinhasError-55").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numeroLinhas-55").style.borderColor = "#d2161e";
  }
  if (numLinhas == "") {
    document.getElementById("numeroLinhasError-55").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número das linhas!</span>';
    formOk = false;
    document.getElementById("numeroLinhas-55").style.borderColor = "#d2161e";
  }

  if (isNaN(numColunas)) {
    document.getElementById("numeroColError-55").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numeroCol-55").style.borderColor = "#d2161e";
  }
  if (numColunas == "") {
    document.getElementById("numeroColError-55").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número das colunas!</span>';
    formOk = false;
    document.getElementById("numeroCol-55").style.borderColor = "#d2161e";
  }

  if (formOk) {
    let tabela = document.getElementById("tabela55");
    tabela.style.visibility = "visible";
    tabela.innerHTML = "";

    for (let i = 0; i < numLinhas; i++) {
      let linha = document.createElement("tr");
      for (let j = 0; j < numColunas; j++) {
        let celula = document.createElement("td");
        celula.textContent = " ";
        linha.appendChild(celula);
      }
      tabela.appendChild(linha);
    }
  }
}

// Limpar erros no número das Linhas
function exercicio55a() {
  document.getElementById("numeroLinhasError-55").innerHTML = " ";
  document.getElementById("numeroLinhas-55").style.borderColor = "#2b2f78";
}

// Limpar erros no número das Colunas
function exercicio55b() {
  document.getElementById("numeroColError-55").innerHTML = " ";
  document.getElementById("numeroCol-55").style.borderColor = "#2b2f78";
}

// Exercício 56
function exercicio56() {
  let numLinha = document.getElementById("numeroLinha-56").value;
  let numColuna = document.getElementById("numeroCol-56").value;
  // numLinha = parseInt(numLinha);
  // numColuna = parseInt(numColuna);
  let texto = document.getElementById("texto-56").value;
  console.log(numLinha);
  console.log(numLinha != 0);
  console.log(isNaN(numLinha));
  let formOk = true;

  // Verificamos introdução do número
  if (isNaN(numLinha)) {
    document.getElementById("numeroLinhaError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numeroLinha-56").style.borderColor = "#d2161e";
  }
  if (numLinha == "") {
    document.getElementById("numeroLinhaError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número da linha!</span>';
    formOk = false;
    document.getElementById("numeroLinha-56").style.borderColor = "#d2161e";
  }
  if (numLinha < 1 || numLinha > 3) {
    document.getElementById("numeroLinhaError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número da linha entre 1 e 3!</span>';
    formOk = false;
    document.getElementById("numeroLinha-56").style.borderColor = "#d2161e";
  }

  if (isNaN(numColuna)) {
    document.getElementById("numeroColError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Não é número, digita novamente!</span>';
    formOk = false;
    document.getElementById("numeroCol-56").style.borderColor = "#d2161e";
  }
  if (numColuna == "") {
    document.getElementById("numeroColError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número da coluna!</span>';
    formOk = false;
    document.getElementById("numeroCol-56").style.borderColor = "#d2161e";
  }
  if (numColuna < 1 || numColuna > 3) {
    document.getElementById("numeroColError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número da linha entre 1 e 3!</span>';
    formOk = false;
    document.getElementById("numeroCol-56").style.borderColor = "#d2161e";
  }

  if (texto == "") {
    document.getElementById("textoError-56").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o texto!</span>';
    formOk = false;
    document.getElementById("texto-56").style.borderColor = "#d2161e";
  }

  if (formOk) {
    let cellId = "cell-" + numLinha + "-" + numColuna;
    document.getElementById(cellId).innerText = texto;
    document.getElementById(cellId).style.padding = "10px";
  }
}

// Limpar erros no número das Linhas
function exercicio56a() {
  document.getElementById("numeroLinhaError-56").innerHTML = " ";
  document.getElementById("numeroLinha-56").style.borderColor = "#2b2f78";
}

// Limpar erros no número das Colunas
function exercicio56b() {
  document.getElementById("numeroColError-56").innerHTML = " ";
  document.getElementById("numeroCol-56").style.borderColor = "#2b2f78";
}

// Limpar erros no texto
function exercicio56c() {
  document.getElementById("textoError-56").innerHTML = " ";
  document.getElementById("texto-56").style.borderColor = "#2b2f78";
}
