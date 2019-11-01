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

    var array = digitExpand(digit);
console.log(array);

    //Business End Logic







    var robotSpeak = function(digit){
      var robotTalk = ""
      for(var index = 0; index <= digit; index++) {
        if (index === 1) {
          robotTalk = (robotTalk + ", Beep")
        } else if (index === 2){
          robotTalk = (robotTalk + ", Boop")
        } else if (index === 3) {
          robotTalk = (robotTalk + ", I'm sorry Dave, I'm afraid I can't do that")
        } else if (index === 0){
          robotTalk = (robotTalk + index)
        } else {
          robotTalk = robotTalk.concat(",", index);
        }
      };
      return robotTalk;
    };

    var result = robotSpeak(digit);

    $('#result').text(result);
    $("#result").show();


  });
});
