function copyEmail() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  const starBackground = document.querySelector("#contactme");
  
  starBackground.addEventListener("mousemove", (e) => {
    starBackground.style.backgroundPositionX = -e.offsetX / 4 + "px";
    //starBackground.style.backgroundPositionY = -e.offsetY + "px";
  });
  $(document).on({
    mouseenter: function() {
      $(".contactText").text("github.com/noahmacritchie");
    },
    mouseleave: function() {
      $(".contactText").text("Get in touch at:");
    }
  }, "#githubContact");
  
  $(document).on({
    mouseenter: function() {
      $(".contactText").text("linkedin.com/in/noahmacritchie/");
    },
    mouseleave: function() {
      $(".contactText").text("Get in touch at:");
    }
  }, "#linkedinContact");
  $(document).on({
    mouseenter: function() {
      $(".contactText").text("macritchienoah@gmail.com");
    },
    mouseleave: function() {
      $(".contactText").text("Get in touch at:");
    }
  }, "#emailContact");