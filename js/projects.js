
$(document).on({
  mouseenter: function () {
      mouseEnterProject(1);
      
    },
    mouseleave: function () {
      mouseLeaveProject(1);
    }
}, "#project1");

$(document).on({
  mouseenter: function () {
      mouseEnterProject(2);
    },
    mouseleave: function () {
      mouseLeaveProject(2);
    }
}, "#project2");

$(document).on({
  mouseenter: function () {
      mouseEnterProject(3);
    },
    mouseleave: function () {
      mouseLeaveProject(3);
    }
}, "#project3");

$(document).on({
  mouseenter: function () {
      mouseEnterProject(4);
    },
    mouseleave: function () {
      mouseLeaveProject(4);
    }
}, "#project4");

$(document).on({
  mouseenter: function () {
      mouseEnterProject(5);
    },
    mouseleave: function () {
      mouseLeaveProject(5);
    }
}, "#project5");

function mouseEnterProject(projNum){
  $("#project" + projNum + " .projectText").css({"display" : "inline-block"});
  $("#project" + projNum + " .projectTags").css({"display" : "inline-block"});
  $("#project" + projNum + " .projectLinks").css({"display" : "inline-block"});
  $("#project" + projNum +  " .projectImg").css({"filter": "brightness(40%) opacity(90%)",
    "z-index": "-2"});
}

function mouseLeaveProject(projNum){
  $("#project" + projNum + " .projectText").css({"display" : "none"});
  $("#project" + projNum + " .projectLinks").css({"display" : "none"});
  $("#project" + projNum + " .projectImg").css({"filter": "brightness(100%) opacity(90%)",
    "z-index": "0"});
  $("#project" + projNum + " .projectTags").css({"display" : "none"})
}
/*function mouseEnterProject(projNum){
  $("#project" + projNum + " .projectText").css({"display" : "inline-block"});
  $("#project" + projNum +  " .projectImg").css({"background-image" : "url('./img/white_image.jpg')",
    "z-index": "-2"});

}

function mouseLeaveProject(projNum){
  $("#project" + projNum + " .projectText").css({"display" : "none"});
  $("#project" + projNum + " .projectText").removeClass('vertTranslate');
  $("#project" + projNum + " .projectImg").css({"background-image" : "url('./img/project_image_" + projNum +".png')",
    "z-index": "0"});
}*/

