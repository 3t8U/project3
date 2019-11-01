//User End Logic
$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    var digit = $("input#userInput").val();


    var digitExpand = function(digitEnd){

      var inputExpand = []
      for(var index = 0; index <= digitEnd; index++){
        console.log("tetx");
        inputExpand.push(index) ;

      }
      return inputExpand;
    }

    var digitArray = digitExpand(digit);


    //Business End Logic







    var robotSpeak = function(digitArray){
      var robotTalk = ""
      for(var index = 0; index <= digitArray.length; index++) {
        if (digitArray[index] === 1){
          digitArray[index] = "Beep"
        } else if (digitArray[index] === 2) {
          digitArray[index] = "Boop"
        } else if (digitArray[index] === 3){
          digitArray[index] = "I'm sorry Dave, I'm afraid I can't do that"


        }

      };
      console.log(digitArray);
      return digitArray.join(',');
    };

    var result = robotSpeak(digitArray);

    $('#result').text(result);
    $("#result").show();


  });
});
