$(document).ready(function(){
    let cycling = 1;
    let classicStatic = document.createElement('audio');
    classicStatic.setAttribute('src', 'assets/SOUND/classicStatic.mp3');
    let classicStaticTuningRadio = document.createElement('audio');
    classicStaticTuningRadio.setAttribute('src', 'assets/SOUND/classicStaticTuningRadio.mp3');
    let diagnosticBeeps = document.createElement('audio');
    diagnosticBeeps.setAttribute('src', 'assets/SOUND/diagnosticBeeps.mp3');
    let ding = document.createElement('audio');
    ding.setAttribute('src', 'assets/SOUND/Ding.mp3');
    let increasingStatic = document.createElement('audio');
    increasingStatic.setAttribute('src', 'assets/SOUND/IncreasingStatic.mp3');

    let scaryBackgroundAudio = document.createElement('audio');
    scaryBackgroundAudio.setAttribute('src', 'assets/SOUND/scaryBackgroundAudio.mp3');
    scaryBackgroundAudio.volume = 0.7;

    let shortGlitch1 = document.createElement('audio');
    shortGlitch1.setAttribute('src', 'assets/SOUND/shortGlitch1.mp3');
    let shortGlitch2 = document.createElement('audio');
    shortGlitch2.setAttribute('src', 'assets/SOUND/shortGlitch2.mp3');
    let stutteringPowerDown = document.createElement('audio');
    stutteringPowerDown.setAttribute('src', 'assets/SOUND/StutteringPowerDown.mp3');
    let speechSolarPanels = document.createElement('audio');
    speechSolarPanels.setAttribute('src', 'assets/SOUND/speechSolarPanels.mp3');
    let speechUnknown = document.createElement('audio');
    speechUnknown.setAttribute('src', 'assets/SOUND/speechUnknown.mp3');


    $(".FirstTransition").click(function(){
      scaryBackgroundAudio.play();
      if (cycling === 1) {
        console.log("click for first transition");
        console.log("cycling is "+cycling);
        cycling += 1;
        console.log("cycling is "+cycling);
        $("#FirstTransition").removeClass("FirstTransition");
        $("#FirstTransition").addClass("BaseContent");
        var this2 = $(this);
        this2.attr("src", "assets/"+cycling+".gif"); //changed thiss to 2.gif
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
    ding.play();
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
      this3.attr("src", "assets/"+cycling+".gif");
      $("#SoundButton1").removeClass("HiddenFirst");
      $("#SoundButton1").addClass("ButtonOverlay");
      console.log("7000 milliseconds should have passed");
    }, 7000);
  });

  $("#SoundButton1").click(function(){
    cycling += 1;
    speechUnknown.play();
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
//cycling should be 6
    setTimeout(function(){
      console.log(cycling+"sound button 1 has been clicked");
      $(".BaseContent").attr("src", "assets/"+cycling+".gif");
      var this4 = $(".BaseContent");
      setTimeout(function(){
        cycling += 1;
        console.log("cycling is "+cycling);
        //cycling is 7
        console.log("first sound button timeout function has been called");
        this4.attr("src", "assets/"+cycling+".gif"); //Gif 7
        $("#LightButton2").removeClass("HiddenFirst"); //unhide light button again
        $("#LightButton2").addClass("ButtonOverlay"); //place light button again
        console.log("4500 milliseconds should have passed");
      }, 4500);
    }, 2400);
  });

  $("#LightButton2").click(function(){
    cycling += 1;
    ding.play();
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
      console.log("5500 milliseconds should have passed");
    }, 5500);
  });


  $("#SoundButton2").click(function(){
    cycling += 1;
    speechSolarPanels.play();
//cycling should be 10
    setTimeout(function(){
      console.log(cycling+"sound button 2 has been clicked");
      $("#SoundButton2").addClass("HiddenFirst"); //hide button that was just clicked
      $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 10 "non rsesponsive? Do a diagnostic" forever loop
      setTimeout(function(){
        console.log("cycling is "+cycling);
        //cycling is still 10
        console.log("sound button 2 timeout function has been called");
        $("#DiagnosticsButton").removeClass("HiddenFirst"); //unhide DiagnosticsButton
        $("#DiagnosticsButton").addClass("ButtonOverlay"); //place DiagnosticsButton
        console.log("3000 milliseconds should have passed");
      }, 2400);
    }, 3000);
  });


  $("#DiagnosticsButton").click(function(){
    cycling += 1; //cycling should be 11
    diagnosticBeeps.play();
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
            shortGlitch2.play();
            setTimeout(function(){
              $("#StaticOverlay").addClass("HiddenFirst"); //hide Static Overlay
              shortGlitch1.play();
              console.log("double nested timeout has occurred");
            }, 1000);
          }, 300);
      console.log("some milliseconds should have passed");
    }, 2000);
  });

  $("#SoundButton3").click(function(){
    cycling += 1;
    classicStaticTuningRadio.play();
//this sound plays static
//cycling should be 12
    console.log(cycling+"sound button 3 has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    setTimeout(function(){
      $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 12 "computer are you there?" forever loop
      console.log("sound button 3 timeout function has been called");
      $("#RedAlert").removeClass("HiddenFirst"); //unhide red alert Button
      $("#RedAlert").addClass("ButtonOverlay"); //place RedAlert button
      console.log("3000 milliseconds should have passed");
    }, 3000);
  });

  $("#RedAlert").click(function(){
    cycling += 1;
    shortGlitch1.play();
    classicStaticTuningRadio.play();
//this button plays static
//cycling should be 13
    var this7 = $(".BaseContent");
    console.log(cycling+"red alert has been clicked");
    $(this).addClass("HiddenFirst"); //hide button that was just clicked
    $(".BaseContent").attr("src", "assets/"+cycling+".gif"); //Show gif 13 "computer are you there?" lights going off
    setTimeout(function(){
      cycling += 1; //cycling is 14
      this7.attr("src", "assets/"+cycling+".gif"); //show gif 14
      classicStatic.play();
      console.log("I waited 9000 seconds and played static and cycled the gif to 14");
      setTimeout(function(){
        $("#AlienOverlay").removeClass("HiddenFirst");
        increasingStatic.play();
        console.log("i waited 5000 seconds-alien overlay and increasingstatic plays");
        setTimeout(function(){
          stutteringPowerDown.play();
          $("#ShutDownOverlay").removeClass("HiddenFirst");
          console.log("I waited 4000 seconds and then played powerdown sound, and shut down overlay");
        setTimeout(function(){
          console.log("I waited 10000 seconds on a dark screne");
          $("#BlackOverlay").removeClass("HiddenFirst");
          setTimeout(function(){
            console.log("I waited 10000 seconds and played the shutdown overlay");
            $(location).attr('href','index.html');
          }, 8000);
        }, 1000);
        }, 4000);
      }, 5000);
    }, 9000);
  });



});
