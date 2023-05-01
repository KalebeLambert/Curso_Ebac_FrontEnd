const form = document.getElementById("form-contato");

const contatos = [];
const telefones = [];

let linhas = '';

const telefoneInput = document.getElementById('telefone-contato');
telefoneInput.addEventListener('input', function(e) {
  e.target.value = e.target.value.replace(/\D/g, '');
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNome = document.getElementById("nome-contato");
    const inputTelefone = document.getElementById("telefone-contato");

    if (telefones.includes(inputTelefone.value)) {
        alert("Contato já cadastrado!");
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += '<td>' + inputNome.value + '</td>';
        linha += '<td>' + inputTelefone.value + '</td>';
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}