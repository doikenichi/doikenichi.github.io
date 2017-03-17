$('.album img').click(function(){
	var lbl = $(this).parent().parent();
	var slideIndex = lbl.attr('data-slide-to')
	$('.modals').toggleClass('modals-on');
	$('#carousel-lightbox').data('bs.carousel').to(slideIndex)
});

$('#lightbox').on('hidden.bs.modal', function (e) {
	console.log('fechado');
	$('.modals').toggleClass('modals-on');
})