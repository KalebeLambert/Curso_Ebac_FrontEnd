$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Digite seu nome!',
            telefone: 'Digite seu telefone!',
            email: 'Digite seu e-mail!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorrectos = validador.numberOfInvalids();
            if (camposIncorrectos){
                alert(`Existem ${camposIncorrectos} campos incorretos!`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
    
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
    
})