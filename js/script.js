"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrowsMob = document.querySelectorAll('.menu__arrow-mob');
    if (menuArrowsMob.length > 0) {
        for (let index = 0; index < menuArrowsMob.length; index++) {
            const menuArrow = menuArrowsMob[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

//-------------------------------------------------------------------------------------------------
// Меню бурнер
const iconMenu = document.querySelector('.mobile-menu');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//-------------------------------------------------------------------------------------------------
// добавить класс при скроле страницы jquery
var header = $(".header__bottom");
var header_h = $(".header");
var scrollChange = 1;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var screenWidth = $(window).width(); // Получаем ширину экрана

    // Проверяем, является ли экран мобильным
    if (screenWidth <= 960) { // Примерное значение для мобильных устройств
        if (scroll >= scrollChange) {
            header.addClass('head_hide');
            header_h.addClass('height');
        } else {
            header.removeClass("head_hide");
            header_h.removeClass("height");
        }
    } else { // Для десктопа
        if (scroll >= scrollChange) {
            header.removeClass('head_hide');
        } else {
            header.removeClass("head_hide");
        }
    }
});

//-------------------------------------------------------------------------------------------------
// Показать сайдбар
const filterButton = document.querySelector(".filter__button");
const sidebar = document.querySelector("#secondary");

    filterButton.addEventListener("click", function(event) {
        event.preventDefault();
        sidebar.classList.toggle("show");
    });

//-------------------------------------------------------------------------------------------------
// Фильтрация товара
   function filterProducts() {
    // Получаем выбранные чекбоксы
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var selectedCategories = Array.from(checkedCheckboxes).map(function(checkbox) {
        return checkbox.name;
    });
    
    // Показываем все товары
    var products = document.querySelectorAll('#product-list .product');
    products.forEach(function(product) {
        product.style.display = 'block';
    });

    // Если есть выбранные категории, скрываем неподходящие товары
    if (selectedCategories.length > 0) {
        products.forEach(function(product) {
            var categories = product.getAttribute('data-categories').split(' ');
            if (!selectedCategories.every(function(category) {
                    return categories.includes(category);
                })) {
                product.style.display = 'none';
            }
        });
    }
}
// Обработчик события изменения чекбоксов
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', filterProducts);
});



//-------------------------------------------------------------------------------------------------
// Показать еще товары
    var productList = document.getElementById("productList");
    var showMoreBtn = document.getElementById("showMoreBtn");
    var products = productList.getElementsByClassName("product");

    // Определите, сколько товаров показывать при каждом нажатии кнопки
    var itemsToShow = 4;
    var totalItems = products.length;
    var visibleItems = 8;

    // Скрыть все товары, начиная с восьмого
    for (var i = visibleItems; i < totalItems; i++) {
        products[i].style.display = "none";
    }

    showMoreBtn.addEventListener("click", function() {
        for (var i = visibleItems; i < visibleItems + itemsToShow; i++) {
        if (i < totalItems) {
            products[i].style.display = "block";
        }
        }
        visibleItems += itemsToShow;

        // Скрыть кнопку, если показаны все товары
        if (visibleItems >= totalItems) {
        showMoreBtn.style.display = "none";
        }
    });

    // Проверить, скрыть кнопку, если на странице нет товаров
    if (totalItems <= visibleItems) {
        showMoreBtn.style.display = "none";
    }





//-------------------------------------------------------------------------------------------------
// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }

//-------------------------------------------------------------------------------------------------
// открыть под меню
// document.addEventListener('DOMContentLoaded', function () {
// 	let carrentMenuLink = document.querySelector('.carrent-menu__link');

	// carrentMenuLink.addEventListener('click', function () {
	// 	// Переключаем класс "clicked" для изменения стилей
	// 	this.classList.toggle('clicked');
	// });
// });

//-------------------------------------------------------------------------------------------------
// Animation
// AOS.init({
//     duration: 1200,
// })

//-------------------------------------------------------------------------------------------------
// добавить класс при скроле страницы
// let scrollpos = window.scrollY

// const header = document.querySelector("header__bottom")
// const scrollChange = 10

// const add_class_on_scroll = () => header.classList.add("head_hide")
// const remove_class_on_scroll = () => header.classList.remove("head_hide")

// window.addEventListener('scroll', function() { 
//     scrollpos = window.scrollY;

//     if (scrollpos >= scrollChange) { 
//         add_class_on_scroll() 
//     }
//     else { 
//         remove_class_on_scroll() 
//     }

// })



//-------------------------------------------------------------------------------------------------
// Маска на телефон 
// jQuery(document).ready(function($) {
//     $("#phone_mask").mask("+41 (99)-999-99-99",{placeholder:" "});
// });


//-------------------------------------------------------------------------------------------------
// Прокрутка чисел на странице 
// function animateCount(element, targetValue, duration) {
//     $({ count: parseInt(element.text()) }).animate({ count: targetValue }, {
//         duration: duration,
//         step: function () {
//             element.text(Math.floor(this.count));
//         },
//         complete: function () {
//             element.text(targetValue);
//         }
//     });
// }
// function startCountAnimation() {
//     animateCount($('#years'), 22, 2000); // Adjust duration as needed
//     animateCount($('#partners'), 15, 2000);
//     animateCount($('#countries'), 14, 2000);
// }
// // Trigger the counting animation when the document is ready
// $(document).ready(function () {
//     startCountAnimation();
// });

//-------------------------------------------------------------------------------------------------
// скрол на верх
// jQuery(document).ready(function() {
//     var btn = $('.up_btn');  
//         btn.on('click', function(e) {
//             e.preventDefault();
//             $('html, body').animate({scrollTop:0}, '300');
//         });
//     });


//-------------------------------------------------------------------------------------------------
//прикрепление файла в форме
// const formImage = document.getElementById('formImage');
// const formPreview = document.getElementById('formPreview');

// formImage.addEventListener('change', () => {
// 	uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
// 	if (!['image/jpeg', 'image/png', 'image/gif', 'image/pdf'].includes(file.type)) {
// 		alert('Разрешены только изображения!');
// 		formImage.value ='';
// 		return;
// 	}
// 	if (file.size > 2 * 1024 * 1024) {
// 		alert('Файл должен быть менее 2 МБ.');
// 		return;
// 	}
// 	var reader = new FileReader();
// 	reader.onload = function (e) {
// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 	};
// 	reader.onerror = function (e) {
// 		alert('Ошибка');
// 	};
// 	reader.readAsDataURL(file);
// }

//-------------------------------------------------------------------------------------------------
//style main-bg
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// };
// ibg();

//-------------------------------------------------------------------------------------------------
// скрывать и показывать пароль в инпуте
// var button2 = document.getElementById("showEye2");
// button2.onclick = showEye2;

// var input2 = document.getElementById("show2");
// var icon = document.getElementById("i");

// function showEye2 () {
// 	if(input2.getAttribute('type') == 'password') {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'text')
// 		button2.innerHTML='<i id="i" class="far fa-eye-slash">';
// 	} else {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'password');
// 		button2.innerHTML='<i id="i" class="far fa-eye">';
// 	}
// }

//-------------------------------------------------------------------------------------------------
// $('#form').submit(function(){
// 	$.ajax({
// 		type:"POST",
// 		url: "mail.php",
// 		data: $(this).serialize()
// 	}).done(function() {
// 	alert("Thank you for contacting us!");
// 	setTimeout(function() {
// 		$.magnificPopup.close();
// 	}, 1000);
// 	});
// 	return false;
// });