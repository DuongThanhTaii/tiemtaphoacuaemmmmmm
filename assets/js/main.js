
function copyMenu() {

    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat'); 
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var dptMenu = document.querySelector('.dpt-menu'); 
    var dptPlacemenu = document.querySelector('.sub-menu');
    dptPlacemenu.innerHTML = dptMenu.innerHTML;
    
    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav'); 
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML= mainNav.innerHTML;

    

    //copy .header-top .wrapper to the top-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav') ;
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();



//show mobile menu
const menuButton = document.querySelector('.trigger'), 
      closeButton = document.querySelector('.t-close'), 
      addclass = document.querySelector('.site'); 
menuButton.addEventListener('click', function() { 
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() { 
    addclass.classList.remove('showmenu')
})


// show menu on mobile 
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand'); 
    this.closest('.has-child').classList.toggle('expand')
}

// slide 
const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
});

//show search
const searchButton = document.querySelector('.t-search'),
     tClose = document.querySelector('.search-close'),
     showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
    showClass.classList.remove( 'showsearch')
})

//show dpt menu
const dptButton= document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})

//product image slider
//
var productThumb = new Swiper ('.small-image', {
	loop: true,
	spaceBetween: 3,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		481: {
			spaceBetween: 32,
		}
	}
});
var productBig = new Swiper ('.big-image', {
	loop: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumb: {
		swiper: productThumb,
	}
});

// stock products
var stocks = document.querySelectorAll('.products .stock')
for (let x = 0; x < stocks,length; x++) {
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}


const FtoShow = '.filter';
        const Fpopup = document.querySelector(FtoShow);
        const Ftrigger = document.querySelector('.filter-trigger');

        Ftrigger.addEventListener('click', () => {
            setTimeout(() => {
                if(!Fpopup.classList.contains('show')) {
                    Fpopup.classList.add('show')
                }
            }, 250 )
        })


        // auto close 
        document.addEventListener('click', (e) => {
            const isClosest = e.target.closest(FtoShow);
            if(!isClosest && Fpopup.classList.contains('show')) {
                Fpopup.classList.remove('show')
            }
        })


        new Vue({
            el: ".swiper",
            data() {
              return {
                homeSwiper: "",
              };
            },
            mounted() {
              this.homeSwiper = new Swiper(".swiper", {
                updateOnWindowResize: true,
                loop: true,
                slidesPerView: 1.5,
                spaceBetween: 10,
                speed: 500,
                centeredSlides: true,
                centeredSlidesBounds: true,
                autoplay: {
                  delay: 1000,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
            }
          })


// login 

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
  
//   // Perform validation (e.g., check against stored credentials)
//   if (username === 'admin' && password === 'admin') {
//     document.getElementById('message').innerText = 'Đăng nhập thành công!';
//     // Ẩn form đăng nhập và hiển thị nội dung sau khi đăng nhập
//     document.getElementById('loginContainer').style.display = 'none';
//     document.getElementById('loggedInContent').classList.remove('hidden');
//   } else {
//     document.getElementById('message').innerText = 'Tên đăng nhập hoặc mật khẩu không đúng!';
//   }
// });
