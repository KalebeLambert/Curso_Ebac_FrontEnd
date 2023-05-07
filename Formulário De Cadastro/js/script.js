$(document).ready(function(){
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    
    
    
    
    
    //As linhas abaixo são apenas para fins de estudo proprio, caso queira, pode ser removida.
    //Fazem parte de um codigo para autocompletar o campo "endereço" com base no seu CEP
    
    
    
    function formatarCEP(cep) {
        return cep.replace(/\D/g, '');
      }
    
    function preencherEndereco(cep) {
        cep = formatarCEP(cep);
        if (cep.length === 8) {
          $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
            if (!data.erro) {
              $('#endereco').val(data.logradouro + ', ' + data.bairro + ', ' + data.localidade);
            }
          }).fail(function() {
            console.log('Ocorreu um erro na requisição.');
          });
        }
      }
      $('#cep').blur(function() {
        var cep = $(this).val();
        preencherEndereco(cep);
      });
    });