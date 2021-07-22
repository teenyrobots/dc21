// scripts for a dream about my wedding

$(document).ready(function(){

  let cycling = 1;

  $("#rightTriangle").click(function(){
    if (cycling < 30){
      cycling += 1;
      $("#comic").attr("src", "assets/"+cycling+".png");
    } else {
      cycling = 1;
      $("#comic").attr("src", "assets/"+cycling+".png");
    }
  });

  $("#leftTriangle").click(function(){
    if (cycling > 1) {
     cycling -= 1;
     $("#comic").attr("src", "assets/"+cycling+".png");
   } else {
       cycling = 30;
       $("#comic").attr("src", "assets/"+cycling+".png");
     }
 });

});
