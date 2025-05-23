window.addEventListener('load', function() {
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {
    produto.classList.add("visivel");

    produto.addEventListener("click", function () {
      alert("Produto comprado!");

      // Efeito de confete
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  });
});