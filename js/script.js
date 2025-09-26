// Готовим поведение после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {

  // ИНИЦИАЛИЗАЦИЯ particles.js (если библиотека загружена)
  try {
    if (typeof particlesJS !== 'undefined') {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 90 },
          "size": { "value": 3 },
          "move": { "speed": 1.2 },
          "line_linked": { "enable": true },
          "opacity": { "value": 0.3 }
        }
      });
    }
  } catch (e) {
    console.warn('particles.js init failed', e);
  }

  // Toggle отображения блока товаров по id
  window.toggleProducts = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    // Если нужно закрывать все другие при открытии — можно раскомментировать:
    // document.querySelectorAll('.products-list').forEach(el => { if (el.id !== id) el.classList.add('hidden'); });
    target.classList.toggle('hidden');
    // прокрутка к блоку при открытии (необязательно). Если нужно — раскомментируй:
    // if (!target.classList.contains('hidden')) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Анимация появления при скролле
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 120;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();

  // Слайдер фоновых картинок
  (function () {
    const slides = document.querySelectorAll('.background-slider .slide');
    if (!slides || slides.length === 0) return;
    let current = 0;
    const total = slides.length;
    // Старт: убедимся, что ровно один active
    slides.forEach((s, idx) => s.classList.toggle('active', idx === 0));

    function showNextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % total;
      slides[current].classList.add('active');
    }

    // Интервал смены
    const interval = 5000; // ms
    let slideTimer = setInterval(showNextSlide, interval);

    // Если хочешь при наведении ставить паузу — раскомментируй:
    // const sliderWrap = document.querySelector('.background-slider');
    // sliderWrap.addEventListener('mouseenter', () => clearInterval(slideTimer));
    // sliderWrap.addEventListener('mouseleave', () => slideTimer = setInterval(showNextSlide, interval));
  })();

});
