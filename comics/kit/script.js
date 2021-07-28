//scripts for my Poppy jquery

$(document).ready(function(){

  let hasItBeenHovered = false;
  let hasItBeenClicked = false;

  //Adventure checker code
  let greenAdventure = false;
  let pinkAdventure = false;
  let blueAdventure = false;


  $("#greenAdventure").click(function(){
    greenAdventure = true;
    if (greenAdventure && pinkAdventure && blueAdventure) {
      $(".moreDreams").show();
    }
    console.log(greenAdventure);
  });

  $("#pinkAdventure").click(function(){
    pinkAdventure = true;
    if (greenAdventure && pinkAdventure && blueAdventure) {
      $(".moreDreams").show();
    }
    console.log(pinkAdventure);
  });

  $("#blueAdventure").click(function(){
    blueAdventure = true;
    if (greenAdventure && pinkAdventure && blueAdventure) {
          $(".moreDreams").show();
    }
    console.log(blueAdventure);
  });

  $(".titleBlock").click(function(){
    $(this).attr("src", "assets/page2.html");
  });

  $(".imgChanger1").hover(function(){
    $(this).attr("src", "assets/Circle1.JPG");
  });

  $(".imgChanger2").hover(function(){
    $(this).attr("src", "assets/Circle2.JPG");
  });

  $(".imgChanger3").hover(function(){
    $(this).attr("src", "assets/Circle3.JPG");
  });

  $(".imgChanger4").hover(function(){
    $(this).attr("src", "assets/Circle4.JPG");
  });

  $(".imgChanger5").hover(function(){
    $(this).attr("src", "assets/Circle5.JPG");
  });

  $("#greenAdventure").click(function(){
    $(this).attr("src", "assets/GreenAdventure.gif");

  });

  $("#pinkAdventure").click(function(){
    $(this).attr("src", "assets/PinkAdventure.gif");
  });

  $("#blueAdventure").click(function(){
    $(this).attr("src", "assets/BlueAdventure.gif");
  });



});
