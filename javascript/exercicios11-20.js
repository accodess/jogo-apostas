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
