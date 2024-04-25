// ----------------------------mobile header--------------------
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerOpen = document.querySelector('.header.open');

burger.addEventListener('click', () => {
  header.classList.toggle('open');
  document.body.classList.add('no-scroll');
})


// -----------------------swiper-----------------------
const swiper = new Swiper('.promoSwiper', {
    loop: true,
    pagination: {
      el: ".promoSwiper .swiper-pagination",
      type: "fraction", 
    }, 
    navigation: {
      nextEl: ".promoSwiper .swiper-button-next",
      prevEl: ".promoSwiper .swiper-button-prev",
    },  
})






// ------------------------------popup----------------------
const popup = document.querySelector('.popup');
const callBtn = document.querySelectorAll('.call-btn');
const popupClose = document.querySelector('.popup-close');
const footerBtn = document.querySelector('.footer-top button');
console.log(footerBtn);

callBtn.forEach((item) => {
  item.addEventListener('click', () => {
    popup.style.top = '50%';
    document.body.classList.add('no-scroll');
  })

  popupClose.addEventListener('click', () => {
    popup.style.top = '-1000%';
    document.body.classList.remove('no-scroll');
  })
})
footerBtn.addEventListener('click', () => {
  popup.style.top = '50%';
  document.body.classList.add('no-scroll');
  popupClose.addEventListener('click', () => {
    popup.style.top = '-1000%';
    document.body.classList.remove('no-scroll');
  })
})
// ----------------------------model-detail-------------------
const modelInfoListSpan = document.querySelectorAll('.model-info ul li span');

modelInfoListSpan.forEach((item) => {
  if(!item.textContent) {
    item.parentNode.remove();
  }
})

// -----------------------------------price---------------------
const checkboxes = document.querySelectorAll('.add-characteristic-list input[type="checkbox"]');

const modelPrice = document.querySelector('.add-characteristic .characteristic-price');

function calcPrice() {
  let total = 1159000;
  checkboxes.forEach((it) => {
    if(it.checked) {
     let label = it.nextElementSibling;
     let price = label.querySelector('span b').innerText;
     total += parseInt(price.replace(/\D/g, ''));
    }
    
    modelPrice.innerText = total.toLocaleString('ru-RU') + ' ₽';
  });
  
}

calcPrice();

checkboxes.forEach((i) => { 
  i.addEventListener('change', calcPrice);
});


// 
const accordionHeaders = document.querySelectorAll('.accordion-header');
const nextBlock = document.querySelector('.add-characteristic');
const accordionContent = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    if(window.innerWidth > 450) {
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove('active');
          otherHeader.nextElementSibling.classList.remove('active');
        }
      });
    }
    
    const content = header.nextElementSibling;
    content.classList.toggle('active');
    header.classList.toggle('active');

    if(window.innerWidth < 450) {
      const mobileContent = document.querySelectorAll('.mobile-accordion-content');

      mobileContent.forEach((item) => {
        if(item.classList.contains('active')) {
          item.style.maxHeight = item.scrollHeight + 'px';
        }else {
          item.style.maxHeight = 0;
        }
      })
    }


    if(window.innerWidth > 400) {
      nextBlock.style.marginTop = content.offsetHeight + 50 +'px';
    }

  });
});

if(window.innerWidth > 400) {
  accordionContent.forEach((item) => {
    if(item.classList.contains('active')) {
      console.log(item.offsetHeight);
      nextBlock.style.marginTop = item.offsetHeight + 50 +'px';
    }
  })
}

// --------------------------------swiper-----------------------
swiper.on('slideChange', () => {
  swiperPagCur.innerText = 0 + swiperPagCur.innerText; 
  swiperPagTotal.innerText = 0 + swiperPagTotal.innerText;
})
const modelSwiper = new Swiper(".modelSwiper", {
  navigation: {
    nextEl: ".model-slider .swiper-button-next",
    prevEl: ".model-slider .swiper-button-prev",
  },
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
})

const modelSwiper2 = new Swiper(".modelSwiper2", {
  direction: 'vertical',
  loop: true,
  thumbs: {
      swiper: modelSwiper
  },

})


const swiperPagCur = document.querySelector('.swiper-pagination-current');
const swiperPagTotal = document.querySelector('.swiper-pagination-total');

swiperPagCur.innerText = 0 + swiperPagCur.innerText;
swiperPagTotal.innerText = 0 + swiperPagTotal.innerText;