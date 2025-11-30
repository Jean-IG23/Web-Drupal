(function ($, Drupal) {
  Drupal.behaviors.scrollToTopLogic = {
    attach: function (context, settings) {
      
      // Buscamos el botón. Usamos 'body' para buscarlo globalmente por si acaso.
      var $btn = $('#back-to-top');

      // Si no existe, no hacemos nada.
      if ($btn.length === 0) return;

      // 1. EL SCROLL (Aparecer/Desaparecer)
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          $btn.fadeIn();
        } else {
          $btn.fadeOut();
        }
      });

      // 2. EL CLIC (Subir) - Lógica simplificada y robusta
      $btn.off('click').on('click', function(e) {
        e.preventDefault();
        // Intentamos mover tanto html como body para compatibilidad total
        $('html, body').animate({scrollTop:0}, '300');
      });
    }
  };
})(jQuery, Drupal);