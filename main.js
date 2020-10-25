var label1 = document.getElementById('main-menu-button');

var label2 = document.getElementById('main-menu-button');

var label3 = document.getElementById('main-menu-button');

var showMePannel = document.getElementById('sub-menu-button');

function openPanel(){
	showMePannel.classList.add('main-menu');
}

label1.addEventListener('click', openPanel);
label2.addEventListener('click', openPanel);
label3.addEventListener('click', openPanel);
