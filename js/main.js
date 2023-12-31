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


const btnForOpenMenuMobile = document.querySelector('.sem_btn_open_menu');
const btnForCloseMenuMobile = document.querySelector('.sem_btn_close_menu');
const menuMobile = document.querySelector('.menu_mobile');

btnForOpenMenuMobile.addEventListener('click', function(e){
    e.preventDefault();
    btnForOpenMenuMobile.style.display = 'none';
    btnForCloseMenuMobile.style.display = 'block';
    menuMobile.style.display = 'block';
})


btnForCloseMenuMobile.addEventListener('click', function(e){
    e.preventDefault();
    btnForOpenMenuMobile.style.display = 'block';
    btnForCloseMenuMobile.style.display = 'none';
    menuMobile.style.display = 'none';
})

function copyEmail() {
    let emailToCopy = "sema.masson@gmail.com";
    let textArea = document.createElement("textarea");
    textArea.value = emailToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
  

  function btnCopy() {
    const btnCopyMail = document.querySelector('.btn_copy_mail');
    const copyImg = document.getElementById('copyImg');
  
    btnCopyMail.addEventListener('click', (e) => {
      btnCopyMail.style.backgroundColor = '#143325';
      btnCopyMail.innerHTML = '✅  Code copied';
    });
  }
  
  // Вызовем функцию после загрузки документа
  document.addEventListener('DOMContentLoaded', btnCopy);
