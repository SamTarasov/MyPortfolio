const btnopenMoreReview = document.getElementById('review_btn_link');
const windowWithReview = document.getElementById('review_layout');
const reviewItemGrad = document.querySelectorAll('.review_item_grad');

btnopenMoreReview.addEventListener('click', function(e){
    e.preventDefault();
    windowWithReview.style.overflow = 'visible';
    btnopenMoreReview.style.display = 'none';
    for (let i = 0; i < reviewItemGrad.length; i++){
        reviewItemGrad[i].style.display = 'none';
    }
    windowWithReview.style.maxHeight = '100%';
})


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


