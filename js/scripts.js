//User End Logic

$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();

    var digit = $ .parseInt(("input#userInput")).val();
    var array = []





    //Business End Logic

    var robotSpeak = function(digit){
      for (var index = 0; index < robotSpeak.length; index++) {
        console.log();
      }
    };

    var result = robotSpeak(function())

    $('#result').text(result);
    $("#result").show();


  });
});
