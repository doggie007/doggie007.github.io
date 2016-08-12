


$( document ).ready(function() {
  var score = 0;
  $(".enemies").hide();
 $("#gameover").hide();
  $("#score").hide();
  $("#crown").hide();
 //What happens when you click "Play" button 
 
 $( "#playbutton" ).click(function() {
   $('#playbutton').hide();
   $("#boatpic").hide();
   $('#alienpic').hide(); 
   $("#paragraph").hide();
   $("#header").hide();
   $("#james").hide();
   $(".enemies").show();
   $("#score").show();
   $("#crown").show();
   
   setTimeout(function(){
   $('.enemies').hide();
    $('#crown').hide();
    $('#gameover').show();
    }, 10000);
   
 });
  
  
  
  
 //What happens when you click Alien1
  $("#alien1").click(function() {
    $(this).toggle('explode');
     score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien2").click(function() {
    $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
  
   $("#alien3").click(function() {
    $(this).toggle('explode');
     score = score + 5;
    document.getElementById("points").innerHTML = score; 
 });
  
   $("#alien4").click(function() {
   $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien5").click(function() {
    $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien6").click(function() {
    $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien7").click(function() {
    $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien8").click(function() {
    $(this).toggle('explode');
      score = score + 5;
    document.getElementById("points").innerHTML = score;
 });
  
   $("#alien9").click(function() {
    $(this).toggle('explode');
     $("#crown").toggle('explode');
      score = score + 10;
    document.getElementById("points").innerHTML = score;
 });
 
  //move alien1
   $( "#playbutton" ).click(function() {
  function movealien1Right() {
    $("#alien1").animate({left: "+=400"}, 2100, movealien1Left);
  }
  
   function movealien1Left() { 
    $("#alien1").animate({left: "-=360"}, 2000, movealien1Right);  
  }
  
  movealien1Right(); 
  
  
   //move alien2
  function movealien2Right() {
    $("#alien2").animate({left: "+=220"}, 2300, movealien2Left);
  }
  
   function movealien2Left() { 
    $("#alien2").animate({left: "-=200"}, 1900, movealien2Right);  
  }
  
  movealien2Right(); 
  
  
   //move alien3
  function movealien3Right() {
    $("#alien3").animate({left: "+=400"}, 2130, movealien3Left);
  }
  
   function movealien3Left() { 
    $("#alien3").animate({left: "-=430"}, 2000, movealien3Right);  
  }
  
  movealien3Right(); 
  
  
  //move alien4
  function movealien4Right() {
    $("#alien4").animate({left: "+=300"}, 1990, movealien4Left);
  }
  
   function movealien4Left() { 
    $("#alien4").animate({left: "-=340"}, 2120, movealien4Right);  
  }
  
  movealien4Right();  
  
  //move alien5
  function movealien5Right() {
    $("#alien5").animate({left: "+=390"}, 2170, movealien5Left);
  }
  
   function movealien5Left() { 
    $("#alien5").animate({left: "-=410"}, 2470, movealien5Right);  
  }
  
  movealien5Right(); 
  
  
   //move alien6
  function movealien6Right() {
    $("#alien6").animate({left: "+=400"}, 2200, movealien6Left);
  }
  
   function movealien6Left() { 
    $("#alien6").animate({left: "-=380"}, 2400, movealien6Right);  
  }
  
  movealien6Right(); 
  
   //move alien7
  function movealien7Right() {
    $("#alien7").animate({left: "+=380"}, 1990, movealien7Left);
  }
  
   function movealien7Left() { 
    $("#alien7").animate({left: "-=409"}, 2400, movealien7Right);  
  }
  
  movealien7Right(); 
  
  //move alien8
  function movealien8Right() {
    $("#alien8").animate({left: "+=640"}, 2000, movealien8Left);
  }
  
   function movealien8Left() { 
    $("#alien8").animate({left: "-=600"}, 2300, movealien8Right);  
  }
  
  movealien8Right();  
  
  //move alien9
    function movealien9Right(){
      $("#alien9").animate({left: "+=500"}, 750, movealien9Left);
   }
  
    function movealien9Left() { 
     $("#alien9").animate({left: "-=530"}, 750, movealien9Right);  
   }
  
    movealien9Right();  
 
     
     //crown 
 function movecrownRight(){
      $("#crown").animate({left: "+=500"}, 750, movecrownLeft);
   }
  
    function movecrownLeft() { 
     $("#crown").animate({left: "-=530"}, 750, movecrownRight);  
   }
     
 movecrownRight();
     
     

  
  
});
  });