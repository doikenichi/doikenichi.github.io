$(function() {

  document.querySelector('.menu-abrir').onclick = function() {
      document.documentElement.classList.add('menu-ativo');
  };

  document.querySelector('.menu-fechar').onclick = function() {
      document.documentElement.classList.remove('menu-ativo');
  };

  document.documentElement.onclick = function(event) {
      if (event.target === document.documentElement) {
          document.documentElement.classList.remove('menu-ativo');
      }
  };

  $('#carousel-sugestoes').click(function(){
    $('#carousel-sugestoes').carousel('pause');
  });

  $('#carousel-sugestoes').on('slid.bs.carousel', function () {
    // do something…
    $('#carousel-sugestoes').carousel('cycle');
  });

});
