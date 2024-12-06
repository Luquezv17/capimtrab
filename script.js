let currentIndex = 0;


function mudarImagem(direction) {
    const produtos = document.querySelectorAll(".produto");
    const totalProdutos = produtos.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) currentIndex = totalProdutos - 1;
    if (currentIndex >= totalProdutos) currentIndex = 0;
    
  
    produtos.forEach((produto, index) => {
        produto.style.display = "none";
    });
    
   
    produtos[currentIndex].style.display = "block";
}


function abrirModal() {
    document.getElementById('modal').style.display = 'flex';
}


function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}


window.onload = function() {
    mudarImagem(0);

    
}