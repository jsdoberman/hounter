'use strict'
new WOW().init();

 $(document).ready(function(){
		$('.main-slider').slick({
			infinite: true,
  			slidesToShow: 2,
			dots: true,
  			variableWidth: true
			
		});
	});

 $(document).ready(function(){
		$('.houses-slider').slick({
			infinite: true,
  			slidesToShow: 3,
			nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg" alt=""></button>',
			prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg" alt=""></button>',
			
  			variableWidth: true
			
		});
	});


 $(document).ready(function(){
		$('.slider-review').slick({
			infinite: true,
  			slidesToShow: 1,
			dots: true,
			centerMode: true,
  			variableWidth: true,
			responsive: [
				{
					breakpoint: 1036,
      				settings: {
						centerMode: false,
						variableWidth: false,
					}

				}

			]
			
		});
	});


const tabTitle = document.querySelectorAll('.tabs-title'),
	tabSection = document.querySelectorAll('.houses-slider'),
	tabParent = document.querySelector('.recommend__container');

function hideActive() {
	tabTitle.forEach(function(item) {
		item.classList.remove('tabs-title_active');
	})

	tabSection.forEach(function(item) {
		item.style.display = 'none'
	})
}

hideActive()

function showeActive(i = 0) {
	tabTitle[i].classList.add('tabs-title_active');
	tabSection[i].style.display = 'block'
	
}
showeActive()


tabParent.addEventListener('click', function(event) {
	if (event.target && event.target.classList.contains('tabs-title')) {
		tabTitle.forEach(function(item, i) {
			if (event.target == item) {
				hideActive();
				showeActive(i)
			}
		})
	}
})




	/* tabTitle.forEach(function(item, i) {
		if (event.target === event.target.classList.contains('tabs-title')) {
			hideActive()
			showeActive(i)
		}
	}) */







/* =========================================================== БУРГЕР МЕНЮ */


const burger = document.querySelector('.hamburger'),
	hideMenu = document.querySelector('.main-menu'), //Блок который скрывается
	menuLink = document.querySelectorAll('.main-menu__item'), //Класс элементов меню, по которым кликаем
	body = document.querySelector('body'); 

		burger.addEventListener('click', function() {
			hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
			burger.classList.toggle('hamburger_close');
			//body.classList.toggle('body-hidden');

		});


		menuLink.forEach(function(item) {
			item.addEventListener('click', function() {
				hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
				burger.classList.toggle('hamburger_close');
				//body.classList.toggle('body-hidden');
			});
		});






// =================================================Модуль анімація цифрового лічильника
//Цифри котрі мають анимуватись обгортаємо тегом з атрибутом data-digits-counter
window.addEventListener('load', windowLoad);

function windowLoad() { 

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000; //Час анімації
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	/* Пуск при завантажені сторінки */
	//digitsCountersInit();

	//--------Пуск при скролі до блока:
		let options = {
			threshold: 0.5
		};

		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					//Вимкнути після спрацювання
					//observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.numb__date') //Батьківський єлемент, який з'являється на екрані
		if(sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
 } 
// =====================================================================================