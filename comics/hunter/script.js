// scripts for my jquery demo

 $(document).ready(function(){

   let soundControlElement = document.getElementById("soundfile");

   $("#soundControl").click(function(){
     if (soundControlElement.paused) {
        $("#soundfile").trigger("play");
        //$("#soundfile").attr("src", "assets/howsmydancing.png");
      }else {
        $("#soundfile").trigger("pause");
        //$("#soundfile").attr("src", "assets/howsmydancing.png");
      }
    });




   let firstPanelchanger = false;
   let secondPanel = false;
   let thirdPanel = false;
   let fourthPanel = false;
   let cycling = 1;

    $(".hider").hide();

    $("#showImage").click(function(){
      $(".hider").show();
        console.log("the button has been clicked");
    });

    $(".imgChanger").click(function(){
          $(this).attr("src", "assets/n2sbluepanel1.jpg");
    });

    $("#thirdIMG").click(function(){
          $(this).addClass("specialBorder");
    });

    $(".firstrowpanels").click(function(){
      let hasItBeenClicked = false;
        if (hasItBeenClicked === false){
            $(this).addClass("specialBorder");
            hasItBeenClicked = true;
          } else {
            $(this).removeClass("specialBorder");
            hasItBeenClicked = false;
          }

          });

          $("#firstPanel").click(function(){
              if (firstPanelchanger === false){
                  $(this).attr("src", "assets/n2sbluepanel1.jpg");
                  firstPanelchanger=true;
                } else {
                  $(this).attr("src", "assets/jmhunterohhopepanel1webc.jpg");
                  firstPanelchanger = false;
                }

                });


              $("#secondPanel").click(function(){
                  if (secondPanel === false){
                      $(this).attr("src", "assets/n2sbluepanel2.jpg");
                      secondPanel=true;
                    } else {
                      $(this).attr("src", "assets/jmhunterohhopepanel21webc.jpg");
                      secondPanel = false;
                    }

                  });


                $("#thirdPanel").click(function(){
                    if (thirdPanel === false){
                        $(this).attr("src", "assets/n2sbluepanel3.jpg");
                        thirdPanel=true;
                      } else {
                        $(this).attr("src", "assets/jmhunterohhopepanel3webc.jpg");
                        thirdPanel = false;
                      }


                    });

                    $("#fourthPanel").click(function(){
                        if (fourthPanel === false){
                            $(this).attr("src", "assets/n2sbluepanel3.jpg");
                            fourthPanel=true;
                          } else {
                            $(this).attr("src", "assets/jmhunterohhopepanel3webc.jpg");
                            fourthPanel = false;
                          }


                        });



                        $("#cycler").click(function(){
                            if (cycling < 4){
                                cycling += 1;
                                $(this).attr("src", "assets/"+cycling+".jpg");
                            } else {
                                cycling = 1;
                                $(this).attr("src", "assets/"+cycling+".jpg");

                            }
                        });

                        $(".hider").hover(
                            function(){
                                $(this).addClass("specialBorder");
                            }, function(){
                                $(this).removeClass("specialBorder");
                            }

                        );


 });
