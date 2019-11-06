var digitExpand = function(digitEnd){
  var inputExpand = []
  for(var index = 0; index <= digitEnd; index++){
    console.log("tetx");
    inputExpand.push(index) ;

  }
  return inputExpand;
}

var robotSpeak = function(digit){
  var digitArray = digitExpand(digit);
  var newDigitArray = integerReplacer(digitArray);
  var robotTalk = ""
  for(var index = 0; index <= newDigitArray.length; index++) {
    if (newDigitArray[index] === 1){
      newDigitArray[index] = "Beep"
    } else if (newDigitArray[index] === 2) {
      newDigitArray[index] = "Boop"
    } else if (newDigitArray[index] === 3){
      newDigitArray[index] = "I'm sorry Dave, I'm afraid I can't do that"


    }

  };
  console.log(digitArray);
  return digitArray.join(',');
};

var integerReplacer = function(inputExpand){
  for(var index = 0 ; index < inputExpand.length; index++){

    var indexContainer = inputExpand[index];
    var integerStringer = indexContainer.toString();
    if (integerStringer.indexOf('3') > -1){
      inputExpand[index] = 3
    } else if (integerStringer.indexOf('2') > -1) {
      inputExpand[index] = 2
    } else if (integerStringer.indexOf('1') > -1){
      inputExpand[index] = 1
    }
  };
  console.log(inputExpand);
  return inputExpand;
};


//User Logic


$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    var digit = $("input#userInput").val();


    var result = robotSpeak(digit);

    $('#result').text(result);
    $("#result").show();


  });
});
//Business End Logic
