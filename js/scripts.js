//User End Logic

$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();

    var digit = $("input#userInput").val();
    var array = [];





    //Business End Logic

    var robotSpeak = function(digit){
    var robotTalk = ""
    for(var index = 0; index < robotSpeak.length; index++) {
    robotTalk .concat(",", digit);
    robotTalk = robotTalk.concat;
      }
    };

    var result = robotSpeak(digit);

    $('#result').text(result);
    $("#result").show();


  });
});
