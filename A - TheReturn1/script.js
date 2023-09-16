jQuery('document').ready(function ($) {
    var menuBtn = $('.menu')
    menu = $('.menu ul')

    menuBtn.click(function () {
        if (menu.hasClass('vest')) {
            menu.removeClass('vest')
        } else {
            menu.addClass('vest')
        }
    })
})
