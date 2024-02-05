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
// Меню бурнер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__mobile-menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


//прикрепление файла в форме

const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
	uploadFile(formImage.files[0]);
});

function uploadFile(file) {
	if (!['image/jpeg', 'image/png', 'image/gif', 'image/pdf'].includes(file.type)) {
		alert('Разрешены только изображения!');
		formImage.value ='';
		return;
	}
	if (file.size > 2 * 1024 * 1024) {
		alert('Файл должен быть менее 2 МБ.');
		return;
	}
	var reader = new FileReader();
	reader.onload = function (e) {
		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	};
	reader.onerror = function (e) {
		alert('Ошибка');
	};
	reader.readAsDataURL(file);
}


//style main-bg
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// };
// ibg();



// $('#form').submit(function(){
// 	$.ajax({
// 		type:"POST",
// 		url: "mail.php",
// 		data: $(this).serialize()
// 	}).done(function() {
// 	alert("Спасибо что обратились ко мне!");
// 	setTimeout(function() {
// 		$.magnificPopup.close();
// 	}, 1000);
// 	});
// 	return false;
// });