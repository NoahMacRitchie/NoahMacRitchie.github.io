var fishPic = 1;
var maxFishY = document.getElementById('projectContainer').getBoundingClientRect().top;
var minFishY = document.getElementById('paintDripping').getBoundingClientRect().top + 35;
var userX;
var userY;
var firstMove = true;
var following = false;
var moveInterval;
var rotation = "up";
fishBreathe();


(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        if(firstMove){
            userX = event.pageX;
            userY = event.pageY;
            firstMove =false;
        }
        if(Math.abs(event.pageX - userX) >= 20|| Math.abs(event.pageY - userY)>= 20){
            userX = event.pageX;
            userY = event.pageY;
            
            if(following== false){
                
                following = true;
                //approx 60 movements/second aka 60fps
                    moveInterval = setInterval(moveFish,17);
                moveFish();
                
            }
        }
    }
})();


function moveFish() {
    
    var fE = $( "#fishEye" );
    var positionEye = fE.position();
    var pC = $( "#projectContainer" );
    
    var fishPos= $("#fish").position();



    var x = (positionEye.left + fishPos.left);
    var y = (fishPos.top +positionEye.top);

    if((userY >= maxFishY && userY <= minFishY) && (Math.abs(x - userX) > 30 || Math.abs(y - userY) > 30)){
        var angle = (Math.atan2(y - userY, x -userX) * 180 / Math.PI )/** -1) /*+ 180*/ ;
        if(Math.abs(angle) > 90){
            rotation = "down";
        } else{
            rotation = "up";
        }
        
        //console.log("xy: (" + x + ", " + y + ") userXY: (" + userX + ", " + userY + ")");
        $('#rotateZone').css('transform','rotate(' + angle + 'deg)');
        let moveX = Math.cbrt(Math.abs(x - userX));
        let moveY = Math.cbrt(Math.abs(y - userY));
        if(x < userX) {
            $('#fish').css({left: fishPos.left + moveX})
        } else{
            $('#fish').css({left: fishPos.left - moveX})
        }
        if(y < userY){
            $('#fish').css({top: fishPos.top + moveY})
        } else{
            $('#fish').css({top: fishPos.top - moveY})
        }
    } else{
        following = false;
        clearInterval(moveInterval);
    }

    
}



function fishBreathe() {
    setInterval(function(){
    $("#fishPic").attr("src", "./img/fish_0" + fishPic + "_" + rotation + ".png");
    if(fishPic == 4) {
        fishPic = 0;
    } else{
        fishPic++;
    }

    }, 250)
}

function fishWhenResize() {



}
  
window.onresize = fishWhenResize;