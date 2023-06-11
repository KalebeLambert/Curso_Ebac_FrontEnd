$(document).ready(function() {
    $('#telefone').mask('(00) 0000-0000');
    $('#email').on('input', function() {
      var input=$(this);
      var email=input.val();
      if(email && email.indexOf('@') > 0 && email.indexOf('.') > 0){
        input.removeClass("is-invalid");
        input.addClass("is-valid");
      }else{
        input.removeClass("is-valid");
        input.addClass("is-invalid");
      }
    });
  });
  