$(function () {
    var carouselList = $("#carousel ul");

    setInterval(function () {
        carouselList.animate({'marginLeft': -400}, 700, moveFirstSlide);
    }, 2000);


    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
});
