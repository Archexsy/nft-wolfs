$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

let Open = document.querySelector('.isOpenClick')

let BurgerContainer = document.querySelector('.burger-container');


let isOpen = false;

	Open.addEventListener('click', function () {
		isOpen = !isOpen;

		toggleMenu(isOpen)
	})

	const toggleMenu = (check) => {
		if(check) {
			BurgerContainer.style.display = 'block';
		} else {
			BurgerContainer.style.display = 'none';
		}
	}