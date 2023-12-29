const btnForOpenMenuMobile = document.querySelectorAll('.sem_btn_open_menu');
const btnForCloseMenuMobile = document.querySelectorAll('.sem_btn_close_menu');
const menuMobile = document.querySelectorAll('.menu_mobile');

// Добавим обработчик для каждого элемента
btnForOpenMenuMobile.forEach(function(btn, index) {
    btn.addEventListener('click', function(){
        btn.style.display = 'none';
        btnForCloseMenuMobile[index].style.display = 'block';
        menuMobile[index].style.display = 'block';
    });
});

btnForCloseMenuMobile.forEach(function(btn, index) {
    btn.addEventListener('click', function(){
        btn.style.display = 'none';
        btnForOpenMenuMobile[index].style.display = 'block';
        menuMobile[index].style.display = 'none';
    });
});


