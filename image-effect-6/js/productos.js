$(document).ready(function(){
    $('.button').click(function() {
        $(this).hide();
          $('.front-frente').addClass('front-open_frente-abierto');
          $('.back-espalda').addClass('back-open_abierto-de-nuevo');
          $('.opened-abrió').addClass('opened-open_abierto-abierto');
          $('.container-product').show();
          setTimeout(function() {
              $('.container-product').addClass('shadow-sombra');
          }, 1000);
          setTimeout(function() {
              $('.front-frente').removeClass('front-open_frente-abierto');
              $('.back-espalda').removeClass('back-open_abierto-de-nuevo');
              $('.opened-abrió').removeClass('opened-open_abierto-abierto');
          }, 1200);
        $('.wrapper').delay(500).fadeIn();
      });
      
      $('.close-cerrar').click(function() {
          $('.wrapper').fadeOut(300);
          $('.container-product').removeClass('shadow-sombra');
          $('.front-frente').addClass('front-close_cierre-frontal');
          $('.back-espalda').addClass('back-close_cerrar-de-nuevo');
          $('.opened-abrió').addClass('opened-close_abierto-cerrado');
          setTimeout(function() {
              $('.container-product').hide();
              $('.button').show();
              $('.front-frente').removeClass('front-close_cierre-frontal');
              $('.back-espalda').removeClass('back-close_cerrar-de-nuevo');
              $('.opened-abrió').removeClass('opened-close_abierto-cerrado');
          }, 1100)
      })
      
      $('.wrapper').click(function() {
          $('.wrapper').fadeOut(300);
          $('.container-product').removeClass('shadow-sombra');
          $('.front-frente').addClass('front-close_cierre-frontal');
          $('.back-espalda').addClass('back-close_cerrar-de-nuevo');
          $('.opened-abrió').addClass('opened-close_abierto-cerrado');
          setTimeout(function() {
              $('.container-product').hide();
              $('.button').show();
              $('.front-frente').removeClass('front-close_cierre-frontal');
              $('.back-espalda').removeClass('back-close_cerrar-de-nuevo');
              $('.opened-abrió').removeClass('opened-close_abierto-cerrado');
          }, 1100)
      })
});