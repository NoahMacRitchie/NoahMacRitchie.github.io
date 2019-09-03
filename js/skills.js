const stars = [
    '<i class="material-icons stars">star_border star_border star_border star_border star_border</i>',
    '<i class="material-icons stars">star star_border star_border star_border star_border</i>',
    '<i class="material-icons stars">star star star_border star_border star_border</i>',
    '<i class="material-icons stars">star star star star_border star_border</i>',
    '<i class="material-icons stars">star star star star star_border</i>',
    '<i class="material-icons stars">star star star star star</i>'
  ];
  
  var ratings = document.getElementsByClassName("ratings");

  for (var i = 0; i < ratings.length; i++) {
    let x = document.createElement("div");
    x.innerHTML = stars[parseInt(ratings[i].innerHTML)];
    ratings[i].innerHTML = "";
    ratings[i].append(x);
  }