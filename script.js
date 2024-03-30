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
    pagination: {
      el: ".promoSwiper .swiper-pagination",
      type: "fraction", 
    }, 
    navigation: {
      nextEl: ".promoSwiper .swiper-button-next",
      prevEl: ".promoSwiper .swiper-button-prev",
    },  
})




const modelSwiper = new Swiper(".modelSwiper", {
  navigation: {
    nextEl: ".modelSwiper .swiper-button-next",
    prevEl: ".modelSwiper .swiper-button-prev",
  },
  direction: 'vertical',
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
})

const modelSwiper2 = new Swiper(".modelSwiper2", {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,
  thumbs: {
      swiper: modelSwiper
  },

})


// ------------------------------popup----------------------
const popup = document.querySelector('.popup');
const callBtn = document.querySelectorAll('.call-btn');
const popupClose = document.querySelector('.popup-close');
const footerBtn = document.querySelector('.footer button');
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

const modelPrice = document.querySelector('.add-characteristic-price.model-price');

function calcPrice() {
  let total = 0;
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
    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header) {
        otherHeader.classList.remove('active');
        otherHeader.nextElementSibling.classList.remove('active');
      }
    });
    
    const content = header.nextElementSibling;
    content.classList.toggle('active');
    header.classList.toggle('active');
    if(window.innerWidth > 400) {
      nextBlock.style.marginTop = content.offsetHeight + 50 +'px';
    }
  });
});

if(window.innerWidth > 400) {
  accordionContent.forEach((item) => {
    if(item.classList.contains('active')) {
      nextBlock.style.marginTop = item.offsetHeight + 50 +'px';
    }
  })
}

// --------------------------------swiper-----------------------
const swiperPagCur = document.querySelector('.swiper-pagination-current');
const swiperPagTotal = document.querySelector('.swiper-pagination-total');

swiperPagCur.innerText = 0 + swiperPagCur.innerText;
swiperPagTotal.innerText = 0 + swiperPagTotal.innerText;

swiper.on('slideChange', () => {
  swiperPagCur.innerText = 0 + swiperPagCur.innerText; 
  swiperPagTotal.innerText = 0 + swiperPagTotal.innerText;
})