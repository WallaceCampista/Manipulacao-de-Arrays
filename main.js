//Criação dos arrays
const numeros = [];
const text = [];
const geral = numeros.concat(text);

//adicionando valor ao vetor com evento de 'enter' do teclado
document.getElementById('formGroupExampleInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputNumero = document.getElementById('formGroupExampleInput').value;
        // Verifica se o valor inserido contém apenas números
        if (/^\d+$/.test(inputNumero)) {
            numeros.push(inputNumero);
            document.getElementById('exibicao1').textContent = numeros.join(' ');
            const item = document.createElement("li");
            item.textContent = inputNumero;
            document.getElementById('listaGeral').appendChild(item);
            document.getElementById('formGroupExampleInput').value = '';
        } else {
            alert("Por favor, insira somente numerais no campo de números.");
        }
    }
});

//adicionando valor ao vetor com evento de 'enter' do teclado
document.getElementById('formGroupExampleInput2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputTexto = document.getElementById('formGroupExampleInput2').value;
        // Verifica se o valor inserido contém apenas letras
        if (/^[a-zA-Z]+$/.test(inputTexto)) {
            text.push(inputTexto);
            document.getElementById('exibicao2').textContent = text.join(' ');
            const item = document.createElement("li");
            item.textContent = inputTexto;
            document.getElementById('listaGeral').appendChild(item);
            document.getElementById('formGroupExampleInput2').value = '';
        } else {
            alert("Por favor, insira somente texto no campo de texto.");
        }
    }
});


/////FUNCOES PARA ALTERAR NUMEROS/////
// Função para ordenar array em ordem crescente
function ordenarCrescente(array) {
    return array.slice().sort((a, b) => a - b);
}

// Função para ordenar array em ordem decrescente
function ordenarDecrescente(array) {
    return array.slice().sort((a, b) => b - a);
}


/////FUNCOES PARA ALTERAR STRINGS/////
// Função para ordenar array em ordem crescente
function ordenarCrescenteText(array) {
    return array.slice().sort((a, b) => a.localeCompare(b));
}

// Função para ordenar array em ordem decrescente
function ordenarDecrescenteText(array) {
    return array.slice().sort((a, b) => b.localeCompare(a));
}

// Evento de escuta para o botão de ordenar números em ordem crescente para array numeral
document.getElementById('btnCrescente').addEventListener('click', function() {
    document.getElementById('exibicao1').textContent = ordenarCrescente(numeros).join(' ');
});

// Evento de escuta para o botão de ordenar números em ordem decrescente
document.getElementById('btnDecrescente').addEventListener('click', function() {
    document.getElementById('exibicao1').textContent = ordenarDecrescente(numeros).join(' ');
});

// Evento de escuta para o botão de ordenar números em ordem crescente para array string
document.getElementById('btnCrescente2').addEventListener('click', function() {
    document.getElementById('exibicao2').textContent = ordenarCrescenteText(text).join(' ');
});

// Evento de escuta para o botão de ordenar números em ordem decrescente para array string
document.getElementById('btnDecrescente2').addEventListener('click', function() {
    document.getElementById('exibicao2').textContent = ordenarDecrescenteText(text).join(' ');

});

/////REMOVENDO VALORES/////
document.addEventListener("DOMContentLoaded", function() {
    //adicionando evento de clique ao elemento exibicaoGeral
    document.getElementById('listaGeral').addEventListener('click', function(event) {
        const selectedElement = event.target;
        const clickedValue = event.target.textContent; //obtém o valor clicado e remove espaços em branco extras
        const numIndex = numeros.indexOf(clickedValue); // Verifica se o valor clicado está no array de números
        const textIndex = text.indexOf(clickedValue); // Verifica se o valor clicado está no array de texto
               
        // Atualize as exibições após a remoção do valor
        if (selectedElement.nodeName == "LI") {
            delete numeros[numIndex];
            delete text[textIndex];
            selectedElement.remove();
        }
              
        // selectedElement.remove();
        document.getElementById('exibicao1').textContent = numeros.join(' ');
        document.getElementById('exibicao2').textContent = text.join(' ');
    });
});
