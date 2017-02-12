$(function() {

  $('#carousel-sugestoes').click(function(){
    $('#carousel-sugestoes').carousel('pause');
  });

  $('#carousel-sugestoes').on('slid.bs.carousel', function () {
    // do something…
    $('#carousel-sugestoes').carousel('cycle');
  });

});
