//jquery comment. Script for homework

$(document).ready(function(){
// $("#item").toggle();
// $("#item").hide();
// $("#item").show();
    let cycling = 1;

//if cycling=1 do the thing, if not DON'T DO IT
    $(".FirstTransition").click(function(){
      if (cycling === 1) {
        console.log("click for first transition");
        console.log("cycling is "+cycling);
        cycling += 1;
        console.log("cycling is "+cycling);
        $("#FirstTransition").removeClass("FirstTransition");
        $("#FirstTransition").addClass("BaseContent");
        var this2 = $(this);
        this2.attr("src", "assets/"+cycling+".gif"); //changed thiss to 2.gif
  // apparently $this doesn't work inside the Timeout function, so we assign a variable to hold it beforehand.
          setTimeout(function(){
            cycling += 1;
            //cycling is 3
            console.log("cycling is "+cycling);
            console.log("first transition timeout function has been called");
            this2.attr("src", "assets/"+cycling+".gif");
            //sets thiss to 3.gif
            $("#LightButton1").removeClass("HiddenFirst");
            $("#LightButton1").addClass("ButtonOverlay");
            console.log("1000 milliseconds should have passed");
          }, 1000);
      } else {
          console.log("else function");
      }
    });
//Cycling is 3

  $("#LightButton1").click(function(){
    cycling += 1;
//cycling should be 4
    console.log(cycling+"light button 1 has been clicked");
    $(this).addClass("HiddenFirst"); //hide light button
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Can't use "this" here, because in this case, we aren't changing Light Button.
    var this3 = $(".BaseContent");
    setTimeout(function(){
      cycling += 1;
      //cycling is 5
      console.log("cycling is "+cycling);
      console.log("first light button timeout function has been called");
      //sets this3 to 5.gif and shows sound button
      this3.attr("src", "assets/"+cycling+".gif"); // gif 5 "what is the status of the oxygen garden" forever loop
      $("#SoundButton1").removeClass("HiddenFirst");
      $("#SoundButton1").addClass("ButtonOverlay");
      console.log("7000 milliseconds should have passed");
    }, 7000);
  });

  $("#SoundButton1").click(function(){
    cycling += 1;
//cycling should be 6
    console.log(cycling+"sound button 1 has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Gif 6 "let's see if we can do something..." and zoom out
    var this4 = $(".BaseContent");
    setTimeout(function(){
      cycling += 1;
      console.log("cycling is "+cycling);
      //cycling is 7
      console.log("first sound button timeout function has been called");
      this4.attr("src", "assets/"+cycling+".gif"); //Gif 7
      $("#LightButton2").removeClass("HiddenFirst"); //unhide light button again
      $("#LightButton2").addClass("ButtonOverlay"); //place light button again
      console.log("6500 milliseconds should have passed");
    }, 6500);
  });

  $("#LightButton2").click(function(){
    cycling += 1;
//cycling should be 8
    console.log(cycling+"light button2 has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //show gif 8 travel and zoom in
    var this5 = $(".BaseContent");
    setTimeout(function(){
      cycling += 1;
      console.log("cycling is "+cycling);
      //cycling is 9
      console.log("light button 2 timeout function has been called");
      this5.attr("src", "assets/"+cycling+".gif"); //show gif 9 "what's wrong with the oxygen garden" forever loop
      $("#SoundButton2").removeClass("HiddenFirst"); //unhide light button again
      $("#SoundButton2").addClass("ButtonOverlay"); //place light button again
      console.log("7000 milliseconds should have passed");
    }, 7000);
  });

  $("#SoundButton2").click(function(){
    cycling += 1;
//cycling should be 10
//I DON'T THINK THIS PART EVEN NEEDS A TIMEOUT FUNCTION BUT I'M TIRED RIGHT NOW
    console.log(cycling+"sound button 2 has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 10 "non rsesponsive? Do a diagnostic" forever loop
    setTimeout(function(){
      console.log("cycling is "+cycling);
      //cycling is still 10
      console.log("sound button 2 timeout function has been called");
      $("#DiagnosticsButton").removeClass("HiddenFirst"); //unhide DiagnosticsButton
      $("#DiagnosticsButton").addClass("ButtonOverlay"); //place DiagnosticsButton
      console.log("3000 milliseconds should have passed");
    }, 3000);
  });

  $("#DiagnosticsButton").click(function(){
    cycling += 1; //cycling should be 11
    console.log(cycling+"diagnostic has been clicked");
    var this6 = $(".BaseContent");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $("#DiagnosticsOverlay").removeClass("HiddenFirst"); //show hacky text overlay
    setTimeout(function(){
      console.log("cycling is "+cycling); //cycling is still 11
      console.log("diagnostic timeout function has been called");
      $("#DiagnosticsOverlay").addClass("HiddenFirst"); //show hacky text overlay
          setTimeout(function(){
            $("#SoundButton3").removeClass("HiddenFirst"); //unhide sound Button
            $("#SoundButton3").addClass("ButtonOverlay"); //place sound Button
            this6.attr("src", "assets/"+cycling+".gif"); //show gif 11
            $("#StaticOverlay").removeClass("HiddenFirst"); //unhide Static Overlay
            console.log("nested timeout has occurred");
            setTimeout(function(){
              $("#StaticOverlay").addClass("HiddenFirst"); //hide Static Overlay
              console.log("double nested timeout has occurred");
            }, 1000);
          }, 3000);
      console.log("some milliseconds should have passed");
    }, 4000);
  });

  $("#SoundButton3").click(function(){
    cycling += 1;
//this sound plays static
//cycling should be 12
    console.log(cycling+"sound button 3 has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 12 "computer are you there?" forever loop
    setTimeout(function(){
      console.log("sound button 3 timeout function has been called");
      $("#RedAlert").removeClass("HiddenFirst"); //unhide red alert Button
      $("#RedAlert").addClass("ButtonOverlay"); //place RedAlert button
      console.log("3000 milliseconds should have passed");
    }, 3000);
  });

  $("#RedAlert").click(function(){
    cycling += 1;
//this button plays static
//cycling should be 13
    var this7 = $(".BaseContent");
    console.log(cycling+"red alert has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 13 "computer are you there?" lights going off
    setTimeout(function(){
      cycling += 1; //cycling is 14
      this7.attr("src", "assets/"+cycling+".gif"); //show gif 14
      console.log("red alert timeout function has been called");
      console.log("5000 milliseconds should have passed");
      setTimeout(function(){
        $("#AlienOverlay").removeClass("HiddenFirst");
        console.log("nested red alert timeout function has been called");
        console.log("5000 milliseconds should have passed");
        setTimeout(function(){
          console.log("double nested red alert timeout function has been called");
          console.log("5000 milliseconds should have passed");
          $(location).attr('href','landing.html');
        }, 9000);
      }, 9000);
    }, 9000);
  });

    // $(".CycledImages").click(function(){
      // console.log("clickfunction should have done it");
      // if (cycling < 5){
        // cycling += 1;
        // $(this).attr("src", "assets/"+cycling+".gif");
        // $(this).addClass("BaseContent");
      // } else {
        // cycling = 1;
        // $(this).attr("src", "assets/"+cycling+".gif");
      // }
    // });



    // $(".changeMyClass").click(function(){
      // $(this).toggleClass("spooky");
    // });



});
