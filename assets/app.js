
window.addEventListener('load', function() {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {
    produto.classList.add("visivel");

    produto.addEventListener("click", function () {
      alert("Produto comprado!");
    });
  });
})