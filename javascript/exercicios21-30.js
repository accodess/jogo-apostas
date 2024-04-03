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

// Transformar euro para dollars
function converterPositParaNega(numero) {
  return numero * -1;
}
