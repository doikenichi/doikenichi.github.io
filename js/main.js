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



var slideAcupuntura = document.querySelector("#slide-acupuntura");
var slideBanhoDeLua = document.querySelector("#slide-banho-de-lua");
var slideBanhoDeOfuro = document.querySelector("#slide-banho-de-ofuro");
var slideDrenagemLinfatica = document.querySelector("#slide-drenagem-linfatica");
var slideGommage = document.querySelector("#slide-gommage");
var slideLimpezaDePele = document.querySelector("#slide-limpeza-de-pele");
var slideMascaraFacial = document.querySelector("#slide-mascara-facial");
var slideMassagemClassica = document.querySelector("#slide-massagem-classica");
var slideMassagemFacial = document.querySelector("#slide-massagem-facial");
var slideHotStones = document.querySelector("#slide-hot-stones");
var slideReflexologiaNosPes = document.querySelector("#slide-reflexologia-nos-pes");
var slideSauna = document.querySelector("#slide-sauna");
var slideShiatsu = document.querySelector("#slide-shiatsu");
var slideShizenExpress = document.querySelector("#slide-shizen-express");

var descAcupuntura = document.querySelector("#desc-acupuntura");
var descBanhoDeLua = document.querySelector("#desc-banho-de-lua");
var descBanhoDeOfuro = document.querySelector("#desc-banho-de-ofuro");
var descDrenagemLinfatica = document.querySelector("#desc-drenagem-linfatica");
var descGommage = document.querySelector("#desc-gommage");
var descLimpezaDePele = document.querySelector("#desc-limpeza-de-pele");
var descMascaraFacial = document.querySelector("#desc-mascara-facial");
var descMassagemClassica = document.querySelector("#desc-massagem-classica");
var descMassagemFacial = document.querySelector("#desc-massagem-facial");
var descHotStones = document.querySelector("#desc-hot-stones");
var descReflexologiaNosPes = document.querySelector("#desc-reflexologia-nos-pes");
var descSauna = document.querySelector("#desc-sauna");
var descShiatsu = document.querySelector("#desc-shiatsu");
var descShizenExpress = document.querySelector("#desc-shizen-express");

slideAcupuntura.addEventListener("click", function(event) {
  descAcupuntura.showModal();
});
slideBanhoDeLua.addEventListener("click", function(event) {
  descBanhoDeLua.showModal();
});
slideBanhoDeOfuro.addEventListener("click", function(event) {
  descBanhoDeOfuro.showModal();
});
slideDrenagemLinfatica.addEventListener("click", function(event) {
  descDrenagemLinfatica.showModal();
});
slideGommage.addEventListener("click", function(event) {
  descGommage.showModal();
});
slideLimpezaDePele.addEventListener("click", function(event) {
  descLimpezaDePele.showModal();
});
slideMascaraFacial.addEventListener("click", function(event) {
  descMascaraFacial.showModal();
});
slideMassagemClassica.addEventListener("click", function(event) {
  descMassagemClassica.showModal();
});
slideMassagemFacial.addEventListener("click", function(event) {
  descMassagemFacial.showModal();
});
slideHotStones.addEventListener("click", function(event) {
  descHotStones.showModal();
});
slideReflexologiaNosPes.addEventListener("click", function(event) {
  descReflexologiaNosPes.showModal();
});
slideSauna.addEventListener("click", function(event) {
  descSauna.showModal();
});
slideShiatsu.addEventListener("click", function(event) {
  descShiatsu.showModal();
});
slideShizenExpress.addEventListener("click", function(event) {
  descShizenExpress.showModal();
});

var closeBtns = document.querySelectorAll('.close-dialog');
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function(e) {
      this.parentNode.close();
    });
  }

  var $win = $(window); // or $box parent container
  var $box = $("dialog");
  
  
   $win.on("click.Bst", function(event){    
    if ( 
      $box.has(event.target).length == 0 //checks if descendants of $box was clicked
      &&
      !$box.is(event.target) //checks if the $box itself was clicked
    ){
      console.log("you clicked outside the box");
    } else {
      console.log("you clicked inside the box");
    }
  });

});

/*
var descAcupuntura = document.querySelector("#desc-acupuntura");
var slideAcupuntura = document.querySelector("#slide-acupuntura");

slideAcupuntura.addEventListener("click", function(event) {
  descAcupuntura.showModal();
});
*/

