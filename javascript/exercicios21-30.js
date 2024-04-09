// Exercício 21
function exercicio21() {
  let numero = document.getElementById("numero-21").value;

  let formOk = true;

  if (isNaN(numero) || numero == "") {
    document.getElementById("numeroError-21").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("numero-21").style.borderColor = "#d2161e";
  }

  if (numero <= 0) {
    document.getElementById("numeroError-21").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número positivo!</span>';
    formOk = false;
    document.getElementById("numero-21").style.borderColor = "#d2161e";
  }

  if (formOk) {
    let numeroNegativo = converterPositParaNega(numero);
    document.getElementById(
      "textExer21"
    ).innerHTML = `O número negativo é ${numeroNegativo} `;
    document.getElementById("textExer21").style.margin = "10px 10px 5px 12px";
  }
}
// Limpar erros no euro
function exercicio21a() {
  document.getElementById("numeroError-21").innerHTML = " ";
  document.getElementById("numero-21").style.borderColor = "#2b2f78";
}

// Transformar número positivo paara o número negativo
function converterPositParaNega(numero) {
  return numero * -1;
}

// Exercício 22
function exercicio22() {
  let numero = document.getElementById("numero-22").value;
  let percent = document.getElementById("percent-22").value;

  let formOk = true;

  if (isNaN(numero) || numero == "") {
    document.getElementById("numeroError-22").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor!</span>';
    formOk = false;
    document.getElementById("numero-22").style.borderColor = "#d2161e";
  }

  if (numero <= 0) {
    document.getElementById("numeroError-22").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor positivo!</span>';
    formOk = false;
    document.getElementById("numero-22").style.borderColor = "#d2161e";
  }

  if (isNaN(percent) || percent == "") {
    document.getElementById("percentError-22").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o percentagem do imposto!</span>';
    formOk = false;
    document.getElementById("percent-22").style.borderColor = "#d2161e";
  }

  if (percent <= 0) {
    document.getElementById("percentError-22").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o percentagem positivo!</span>';
    formOk = false;
    document.getElementById("percent-22").style.borderColor = "#d2161e";
  }

  if (formOk) {
    document.getElementById("textExer22").innerHTML = devolverValorSemImpostos(
      numero,
      percent
    );
    document.getElementById("textExer22").style.margin = "10px 10px 5px 12px";
  }
}
// Limpar erros no euro
function exercicio22a() {
  document.getElementById("numeroError-22").innerHTML = " ";
  document.getElementById("numero-22").style.borderColor = "#2b2f78";
}
// Limpar erros no percent
function exercicio22b() {
  document.getElementById("percentError-22").innerHTML = " ";
  document.getElementById("percent-22").style.borderColor = "#2b2f78";
}

// Devolver valor sem impostos e valor do imposto
function devolverValorSemImpostos(valor, percentImposto) {
  let valorSemImposto = (valor / (1 + percentImposto / 100)).toFixed(2);
  let valorImposto = (valor - valorSemImposto).toFixed(2);

  return `O valor sem impostos - ${valorSemImposto} € <br>
  O valor do imposto - ${valorImposto} €`;
}

// Exercício 23
function exercicio23() {
  let numero = parseFloat(document.getElementById("numero-23").value);
  let percent = parseFloat(document.getElementById("percent-23").value);

  let formOk = true;

  if (isNaN(numero) || numero == "") {
    document.getElementById("numeroError-23").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor!</span>';
    formOk = false;
    document.getElementById("numero-23").style.borderColor = "#d2161e";
  }

  if (numero <= 0) {
    document.getElementById("numeroError-23").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor positivo!</span>';
    formOk = false;
    document.getElementById("numero-23").style.borderColor = "#d2161e";
  }

  if (isNaN(percent) || percent == "") {
    document.getElementById("percentError-23").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o percentagem do imposto!</span>';
    formOk = false;
    document.getElementById("percent-23").style.borderColor = "#d2161e";
  }

  if (percent <= 0) {
    document.getElementById("percentError-23").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o percentagem positivo!</span>';
    formOk = false;
    document.getElementById("percent-23").style.borderColor = "#d2161e";
  }

  if (formOk) {
    document.getElementById("textExer23").innerHTML = devolverValorComImpostos(
      numero,
      percent
    );
    document.getElementById("textExer23").style.margin = "10px 10px 5px 12px";
  }
}
// Limpar erros no euro
function exercicio23a() {
  document.getElementById("numeroError-23").innerHTML = " ";
  document.getElementById("numero-23").style.borderColor = "#2b2f78";
}
// Limpar erros no percent
function exercicio23b() {
  document.getElementById("percentError-23").innerHTML = " ";
  document.getElementById("percent-23").style.borderColor = "#2b2f78";
}

// Devolver valor sem impostos e valor do imposto
function devolverValorComImpostos(valor, percentImposto) {
  let valorImposto = (valor * (percentImposto / 100)).toFixed(2);
  let valorComImposto = (parseFloat(valor) + parseFloat(valorImposto)).toFixed(
    2
  );
  return `O valor com impostos - ${valorComImposto} € <br>
  O valor do imposto - ${valorImposto} €`;
}

// Exercício 24
function exercicio24() {
  let numero = parseFloat(document.getElementById("numero-24").value);
  let formOk = true;

  if (isNaN(numero) || numero == "") {
    document.getElementById("numeroError-24").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número!</span>';
    formOk = false;
    document.getElementById("numero-24").style.borderColor = "#d2161e";
  }

  if (numero <= 0) {
    document.getElementById("numeroError-24").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o número positivo!</span>';
    formOk = false;
    document.getElementById("numero-24").style.borderColor = "#d2161e";
  }

  if (formOk) {
    document.getElementById("textExer24").innerHTML = gerirPalavraPasse(numero);
    document.getElementById("textExer24").style.margin = "10px 10px 5px 12px";
  }
}
// Limpar erros no número
function exercicio24a() {
  document.getElementById("numeroError-23").innerHTML = " ";
  document.getElementById("numero-23").style.borderColor = "#2b2f78";
}

// Gerir a palavra-passe para utilizador
function gerirPalavraPasse(numCarateres) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < numCarateres; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return `A sua palavra-passe - '${password}'`;
}

// Exercício 25
function exercicio25() {
  document.getElementById("textExer25").innerHTML = maiorNumero();
  document.getElementById("textExer25").style.margin = "10px 10px 5px 12px";
}

// Encontrar o  maior número no array
function maiorNumero() {
  const numeros = [];
  const lengthArr = 100;

  for (let i = 0; i < lengthArr; i++) {
    numeros[i] = Math.floor(Math.random() * lengthArr);
  }
  const array = numeros.join(", ");
  const maxNumber = Math.max(...numeros);

  return `O maior número do array é ${maxNumber}<br>
  Array = [${array}] 
  `;
}

// Exercício 26
function exercicio26() {
  document.getElementById("textExer26").innerHTML = menorNumero();
  document.getElementById("textExer26").style.margin = "10px 10px 5px 12px";
}

// Encontrar o  menor número no array
function menorNumero() {
  const numeros = [];
  const lengthArr = 100;

  for (let i = 0; i < lengthArr; i++) {
    numeros[i] = Math.floor(Math.random() * lengthArr);
  }
  const array = numeros.join(", ");
  const minNumber = Math.min(...numeros);

  return `O menor número do array é ${minNumber}<br>
  Array = [${array}] 
  `;
}

// Exercício 27
function exercicio27() {
  let distancia = parseFloat(document.getElementById("km-27").value);
  let quantidade = parseFloat(document.getElementById("quant-27").value);

  let formOk = true;

  if (isNaN(distancia) || distancia == "") {
    document.getElementById("kmError-27").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor!</span>';
    formOk = false;
    document.getElementById("km-27").style.borderColor = "#d2161e";
  }

  if (distancia <= 0) {
    document.getElementById("kmError-27").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o valor positivo!</span>';
    formOk = false;
    document.getElementById("km-27").style.borderColor = "#d2161e";
  }

  if (isNaN(quantidade) || quantidade == "") {
    document.getElementById("quantError-27").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza o quantidade consumida!</span>';
    formOk = false;
    document.getElementById("quant-27").style.borderColor = "#d2161e";
  }

  if (quantidade <= 0) {
    document.getElementById("quantError-27").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512" class="error-img"><g><path d="M256,512c141.385,0,256-114.615,256-256S397.385,0,256,0S0,114.615,0,256C0.153,397.322,114.678,511.847,256,512z    M234.667,128c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333v170.667   c0,11.782-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333V128z M256,384c11.782,0,21.333,9.551,21.333,21.333   s-9.551,21.333-21.333,21.333c-11.782,0-21.333-9.551-21.333-21.333S244.218,384,256,384z"/></g><span class="error-text-4"> Por favor introduza a quantidade consumida!</span>';
    formOk = false;
    document.getElementById("quant-27").style.borderColor = "#d2161e";
  }

  if (formOk) {
    document.getElementById("textExer27").innerHTML = consumoMedioCombustivel(
      distancia,
      quantidade
    );
    document.getElementById("textExer27").style.margin = "10px 10px 5px 12px";
  }
}
// Limpar erros na distância
function exercicio27a() {
  document.getElementById("kmError-27").innerHTML = " ";
  document.getElementById("km-27").style.borderColor = "#2b2f78";
}
// Limpar erros na quantidade
function exercicio27b() {
  document.getElementById("quantError-27").innerHTML = " ";
  document.getElementById("quant-27").style.borderColor = "#2b2f78";
}

// Devolver valor sem impostos e valor do imposto
function consumoMedioCombustivel(distancia, combustivel) {
  let consumo = combustivel / distancia;
  return `O consumo médio de combustível - ${consumo.toFixed(
    2
  )} litros por 1 km`;
}
