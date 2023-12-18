$(document).ready(function(){

    //pc menu
    function setGnb() {
        var gnbItem = $(".gnb-item");

        gnbItem.on("mouseover focusin", function () {
            $(this).addClass("show-sub");
            $(this).siblings().removeClass("show-sub");
        });
        gnbItem.on("mouseleave focusout", function () {
            $(this).removeClass("show-sub");
        });
    }

    //mo menu
    function setMenu() {
        var btnopen = $(".btn-menu-open"),
            btnclose = $('.btn-menu-close');

            btnopen.on("click", function(){
                $(this).next().addClass('open');
            });
            btnclose.on("click", function(){
                $(".menu-wrap").removeClass('open');
            });

            // fold
            var btnfold = $(".fold-header .btn-fold");

            btnfold.on("click", function (){
                $(this).parents(".fold-item").toggleClass('expanded');
            });    
    }


    setGnb();
    setMenu();
});