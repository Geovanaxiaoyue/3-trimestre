// Pom ----------------------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

//enquanto
while (contador < ListaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSomPomPom;
}
listaDeTeclas[0]. onclick = tocaSomPom;