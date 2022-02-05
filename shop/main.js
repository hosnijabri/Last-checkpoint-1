var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})
$(document).ready(function() {

    "use strict";

    var menuActive = false;
    var header = $('.header');
    setHeader();
    initCustomDropdown();
    initPageMenu();

    function setHeader() {

        if (window.innerWidth > 991 && menuActive) {
            closeMenu();
        }
    }

    function initCustomDropdown() {
        if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
            var placeholder = $('.custom_dropdown_placeholder');
            var list = $('.custom_list');
        }

        placeholder.on('click', function(ev) {
            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }

            $(document).one('click', function closeForm(e) {
                if ($(e.target).hasClass('clc')) {
                    $(document).one('click', closeForm);
                } else {
                    list.removeClass('active');
                }
            });

        });

        $('.custom_list a').on('click', function(ev) {
            ev.preventDefault();
            var index = $(this).parent().index();

            placeholder.text($(this).text()).css('opacity', '1');

            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }
        });


        $('select').on('change', function(e) {
            placeholder.text(this.value);

            $(this).animate({ width: placeholder.width() + 'px' });
        });
    }

    /*

    4. Init Page Menu

    */

    function initPageMenu() {
        if ($('.page_menu').length && $('.page_menu_content').length) {
            var menu = $('.page_menu');
            var menuContent = $('.page_menu_content');
            var menuTrigger = $('.menu_trigger');

            //Open / close page menu
            menuTrigger.on('click', function() {
                if (!menuActive) {
                    openMenu();
                } else {
                    closeMenu();
                }
            });

            //Handle page menu
            if ($('.page_menu_item').length) {
                var items = $('.page_menu_item');
                items.each(function() {
                    var item = $(this);
                    if (item.hasClass("has-children")) {
                        item.on('click', function(evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            var subItem = item.find('> ul');
                            if (subItem.hasClass('active')) {
                                subItem.toggleClass('active');
                                TweenMax.to(subItem, 0.3, { height: 0 });
                            } else {
                                subItem.toggleClass('active');
                                TweenMax.set(subItem, { height: "auto" });
                                TweenMax.from(subItem, 0.3, { height: 0 });
                            }
                        });
                    }
                });
            }
        }
    }

    function openMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.set(menuContent, { height: "auto" });
        TweenMax.from(menuContent, 0.3, { height: 0 });
        menuActive = true;
    }

    function closeMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.to(menuContent, 0.3, { height: 0 });
        menuActive = false;
    }


});

function allp(a) {
    a.className = 'filter active'
    document.getElementById('b').className = 'filter'
    document.getElementById('c').className = 'filter'
    document.getElementById('d').className = 'filter'
    document.getElementById('c1').className = `cardss `
    document.getElementById('c2').className = `cardss `
    document.getElementById('c3').className = `cardss`
    document.getElementById('c4').className = `cardss `
    document.getElementById('c5').className = `cardss `
    document.getElementById('c6').className = `cardss`
    document.getElementById('c7').className = `cardss `
    document.getElementById('c8').className = `cardss `
    document.getElementById('c9').className = `cardss`


}

function newp(a) {
    a.className = 'filter active'
    document.getElementById('a').className = 'filter'
    document.getElementById('c').className = 'filter'
    document.getElementById('d').className = 'filter'
    document.getElementById('c1').className += ` n`
    document.getElementById('c2').className = ` cardss`
    document.getElementById('c3').className = `cardss `
    document.getElementById('c4').className += ` n`
    document.getElementById('c5').className += ` n`
    document.getElementById('c6').className = `n `
    document.getElementById('c7').className += ` n`
    document.getElementById('c8').className = ` n `
    document.getElementById('c9').className += ` n`

}

function promotionp(a) {
    a.className = 'filter active'
    document.getElementById('b').className = 'filter'
    document.getElementById('a').className = 'filter'
    document.getElementById('d').className = 'filter'
    document.getElementById('c1').className += ` n`
    document.getElementById('c2').className += ` n`
    document.getElementById('c3').className += ` n`
    document.getElementById('c4').className = ` cardss`
    document.getElementById('c5').className = ` cardss`
    document.getElementById('c6').className += ` n`
    document.getElementById('c7').className = ` cardss`
    document.getElementById('c8').className += ` n`
    document.getElementById('c9').className += ` n`
}

function instock(a) {
    a.className = 'filter active'
    document.getElementById('b').className = 'filter'
    document.getElementById('c').className = 'filter'
    document.getElementById('a').className = 'filter'
    document.getElementById('c1').className = `cardss `
    document.getElementById('c2').className = `cardss `
    document.getElementById('c3').className = `cardss`
    document.getElementById('c4').className = `cardss `
    document.getElementById('c5').className = `cardss `
    document.getElementById('c6').className += ` n`
    document.getElementById('c7').className = `cardss `
    document.getElementById('c8').className = `cardss `
    document.getElementById('c9').className += ` n`

}

function loadCart(params) {
    a = JSON.parse(localStorage.getItem('cart'))

    document.querySelector('.cart-count').innerHTML = a[0]
    document.querySelector('.cart_price').innerHTML = a[1]
}

function addToCart(price) {
    cartCount = Number(document.querySelector('.cart-count').innerHTML)
    cartPrice = Number(document.querySelector('.cart_price').innerHTML)
    cartCount += 1
    cartPrice += Number(price)
    document.querySelector('.cart-count').innerHTML = cartCount
    document.querySelector('.cart_price').innerHTML = cartPrice
    idk = [cartCount, cartPrice]
    localStorage.setItem('cart', JSON.stringify(idk))
}
function resetCart(params) {
    console.log('baaaa3')
    localStorage.setItem('cart', '[0,0]')
    document.querySelector(".cart_price").innerHTML = 0
    document.querySelector('.cart-count').innerHTML = 0
}