//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader
// start navigation 

class Navigation {
    navBar(obj) {
        $(obj.btn).on(obj.eventName, () => {
            $(obj.menu).toggleClass(obj.toggleClas);
            $(obj.send).toggleClass(obj.add);
        });

    }
}
// dom content is loaded
$(() => {
    // start navigation 
    const nav = new Navigation;
    nav.navBar({
        btn: '.toggle',
        menu: '.menu',
        eventName: 'click',
        toggleClas: 'toggleCls',
        add: 'fa-times',
        send: '.fa-align-justify'
    });
    // end navigation 
});