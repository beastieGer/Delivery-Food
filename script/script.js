const linkCards = document.querySelectorAll('.card--link');
// const logo = document.querySelectorAll('.logo');

linkCards.forEach((link) => {
	link.addEventListener('click', function () {
		return (location.href = 'restaurant.html');
	});
});

// logo.forEach((link) => {
// 	link.addEventListener('click', (item) => (location.href = 'index.html'));
// });

// click на корзину и появление модального окна
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-header__close');
const basket = document.querySelectorAll('.basket');
// console.log(basket);

basket.forEach((bas) => {
	bas.addEventListener('click', function () {
		modal.classList.remove('modal--hidden');
	});
});

modalClose.addEventListener('click', function () {
	modal.classList.add('modal--hidden');
});
