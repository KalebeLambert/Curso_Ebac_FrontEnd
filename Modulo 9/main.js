$('document').ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const atividade = $('#atividade').val();
        const atividades = $('ul li').map(function(){
            return $(this).text().trim();
        }).get();
        if (atividades.includes(atividade)) {
            alert('Esta atividade já está incluída na lista!');
        } else {
            $('<li>').text(atividade).appendTo('ul');
            $('#atividade').val('');
        }
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('completed');
    })
})
