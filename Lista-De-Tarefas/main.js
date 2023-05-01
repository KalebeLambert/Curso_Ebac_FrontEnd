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
        const atividades = $('tbody td').map(function(){
            return $(this).text().trim();
        }).get();
        if (atividades.includes(atividade)) {
            alert('Esta atividade já está incluída na tabela!');
        } else {
            const novoItem = $('<tr></tr>');
            $(`<td>${atividade}</td>`).appendTo(novoItem);
            $(novoItem).appendTo('tbody');
            $('#atividade').val('');
        }
    })
    
})