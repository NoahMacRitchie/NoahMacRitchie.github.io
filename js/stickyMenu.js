var menu = document.querySelector('.menu');
var menuPosition = menu.getBoundingClientRect();

var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;
var transitionOne = $("#wavesTransition");
var transitionTwo = $("#paintDripping");
var transitionThree = $("#orangeFlame");




window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;

    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;

    }
    
    if(window.scrollY > transitionThree.position().top){
        $(".menu").css({"background-color" : "rgba(0, 31, 63, 0.95)"});
    }else if(window.scrollY > transitionTwo.position().top){
        $(".menu").css({"background-color" : "rgba(200, 74, 32, 0.95)"});
    } else if(window.scrollY > transitionOne.position().top) {
        $(".menu").css({"background-color" : "rgba(105, 65, 225, 0.95)"});
    } else {
        $(".menu").css({"background-color" : "rgba(65, 105, 225, 0.95)"});
    }

});

window.addEventListener('ontouchmove', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
        this.console.log("true");
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
        this.console.log("false");
    }
});


function openSmallNav(){
    $("#smallNavLinks").toggle();
}