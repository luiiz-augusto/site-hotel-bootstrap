// efeito das letras diminuir e aumenta
/*
let text = document.querySelector('.text');

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  if (scrollTop > 5) {
    text.classList.add("hidden")
  } else {
    text.classList.remove("hidden");
  }

});
*/
// quando a barra desce 
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle("sticky", window.scrollY > 0);

});

var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

//efeito carrosel auto
let time = 3000;
let curryImagemIndex = 0;
let imagem = document.querySelectorAll('#next img');
let max = imagem.length;

function nextImage() {

  imagem[curryImagemIndex].classList.remove("selected");

  curryImagemIndex++;

  if (curryImagemIndex >= max) {
    curryImagemIndex = 0;
  };
  imagem[curryImagemIndex].classList.add("selected");
};

function start() {
  setInterval(() => {
    nextImage();
  }, time);

};


function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu ');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
}



window.addEventListener("load", start);