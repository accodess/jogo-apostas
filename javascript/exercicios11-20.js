// Exercício 11
function exercicio11() {
  let num = document.getElementById("numero-11").value;
  if (isNaN(num) || num == "") {
    document.getElementById("numeroError-11").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza um número!</span>';
    document.getElementById("numero-11").style.borderColor = "#d2161e";
  } else if (num < 0) {
    document.getElementById("textExer11").innerHTML =
      "O número " + num + " é negativo.";
    document.getElementById("textExer11").style.marginTop = "15px";
  } else {
    document.getElementById("textExer11").innerHTML =
      "O número " + num + " é positivo.";
    document.getElementById("textExer11").style.marginTop = "15px";
  }
}

// Limpar erros no número
function exercicio11a() {
  document.getElementById("numeroError-11").innerHTML = "";
  document.getElementById("numero-11").style.borderColor = "#2b2f78";
}

// Exercício 12
function exercicio12() {
  let num1, num2, max;
  let text = document.getElementById("textExer12");
  // Validámos os números inseridos
  do {
    num1 = window.prompt("Digite o primeiro número: ");
    if (num1 == "") {
      num1 = window.prompt("Erro! Digitar o primeiro número novamente: ");
    }
    if (isNaN(num1)) {
      num1 = window.prompt(
        "Não é número! Digitar o primeiro número novamente: "
      );
    }
  } while (num1 == "" || isNaN(num1));

  do {
    num2 = window.prompt("Digite o segundo número: ");
    if (num2 == "") {
      num2 = window.prompt("Erro! Digitar o segundo número novamente: ");
    }
    if (isNaN(num2)) {
      num2 = window.prompt(
        "Não é número! Digitar o segundo número novamente: "
      );
    }
  } while (num2 == "" || isNaN(num2));

  max = Math.max(num1, num2);

  text.innerHTML = "O maior número é " + max;
  text.style.marginTop = "15px";
}

// Exercício 13
window.onload = sessionStorage.setItem("numCertos", "0");
window.onload = sessionStorage.setItem("numErr", "0");
function exercicio13() {
  let formOk = true;
  let num = Number(document.getElementById("numero-13").value);

  if (isNaN(num) || num < 1 || num > 6) {
    document.getElementById("numeroError-13").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza um número entre 1 e 6!</span>';
    formOk = false;
    document.getElementById("numero-13").style.borderColor = "#d2161e";
  }
  let numRand = Math.floor(Math.random() * 6 + 1);

  if (formOk) {
    if (num == numRand) {
      document.getElementById("textExer13").innerHTML = "Acertou! Parabéns!🥳";
      document.getElementById("textExer13").style.marginTop = "15px";
      sessionStorage.numCertos = Number(sessionStorage.numCertos) + 1;
    } else {
      document.getElementById("textExer13").innerHTML =
        "Não Acertou!🥶 Tenta novamente!";
      document.getElementById("textExer13").style.marginTop = "15px";
      sessionStorage.numErr = Number(sessionStorage.numErr) + 1;
    }
    document.getElementById("textExer13a").innerHTML =
      "O número de apostas certas " +
      sessionStorage.numCertos +
      " e número de apostas erradas " +
      sessionStorage.numErr;
    console.log(numRand);
  }
}

// Limpar erros no número
function exercicio13a() {
  document.getElementById("numeroError-13").innerHTML = "";
  document.getElementById("numero-13").style.borderColor = "#2b2f78";
}

// Exercício 14
function exercicio14() {
  let num1 = Number(document.getElementById("numero1-14").value);
  let num2 = Number(document.getElementById("numero2-14").value);
  let num3 = Number(document.getElementById("numero3-14").value);
  let numeros = [];
  let formOk = true;

  if (isNaN(num1) || num1 == "") {
    document.getElementById("numeroError1-14").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número 1!</span>';
    formOk = false;
    document.getElementById("numero1-14").style.borderColor = "#d2161e";
  }

  if (isNaN(num2) || num2 == "") {
    document.getElementById("numeroError2-14").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número 2!</span>';
    formOk = false;
    document.getElementById("numero2-14").style.borderColor = "#d2161e";
  }
  if (isNaN(num3) || num3 == "") {
    document.getElementById("numeroError3-14").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número 3!</span>';
    formOk = false;
    document.getElementById("numero3-14").style.borderColor = "#d2161e";
  }
  numeros.push(num1, num2, num3);
  numeros.sort(function (a, b) {
    return a - b;
  });
  console.log(numeros);

  if (formOk) {
    document.getElementById("textExer14").innerHTML =
      "Ordem crescente dos números &rarr; " + numeros.join(",  ");
    document.getElementById("textExer14").style.marginTop = "15px";
  }
}

// Limpar erros no número
function exercicio14a() {
  document.getElementById("numeroError1-14").innerHTML = "";
  document.getElementById("numero1-14").style.borderColor = "#2b2f78";
}
// Limpar erros no número
function exercicio14b() {
  document.getElementById("numeroError2-14").innerHTML = "";
  document.getElementById("numero2-14").style.borderColor = "#2b2f78";
}
// Limpar erros no número
function exercicio14c() {
  document.getElementById("numeroError3-14").innerHTML = "";
  document.getElementById("numero3-14").style.borderColor = "#2b2f78";
}
