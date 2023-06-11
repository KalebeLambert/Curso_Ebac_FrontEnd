const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tamanho1 = document.getElementById('number-A').value;
    const tamanho2 = document.getElementById('number-B').value;
    const resultado = false
    
    const Numero1 = document.getElementById('number-A');
    const Numero2 = document.getElementById('number-B');

if (tamanho1 < tamanho2) {
        alert("Parabéns, o Numero B é maior que o Numero A")
        Numero1.value = ''
        Numero2.value = ''
    } else {
        alert("Desculpe, o Numero B não é maior que o Numero A... Tente Novamente")
    }
})