  
let random;
let point;
let max;
let record = [];


 // Don't repeat yourself (DRY coding) - refactoring the code
function colorChanger(id,color){
  document.getElementById(id).style.color= color;
};
function displayMessage(id,message){
  document.getElementById(id).innerHTML= message;
};
function randomMaker(){
  random = Math.trunc(Math.random() * 20 + 1);
  return random;
};

point = parseInt(document.getElementById('score__point').innerHTML);
  document.getElementById('btn__again').addEventListener('click', function() {
    randomMaker();
    document.body.style.background = 'rgb(35, 35, 48)';
    document.getElementById('inputBox').style.background= 'rgb(35, 35, 48)';
    colorChanger("questionMark","rgb(35, 35, 48)");
    colorChanger("btn__again","rgb(35, 35, 48)");
    colorChanger("btn__check","rgb(35, 35, 48)");
    displayMessage("questionMark","?");
    displayMessage("message","Start guessing...");
    displayMessage("score__point","20");
    point = 20;
    return random;
  });

  document.getElementById('btn__check').addEventListener('click', function() {
    let input = document.getElementById('inputBox').value;
    input = parseInt(input);
    if (input === random){

      // Don't repeat yourself - refactoring the code above
      displayMessage("message","you won!🏆");
      document.body.style.background='green';
      document.getElementById('inputBox').style.background= 'green';
      colorChanger("questionMark", "green");
      colorChanger("btn__again", "green");
      colorChanger("btn__check", "green");
      displayMessage("questionMark",random);
      record.push(point);
      max = parseInt(document.getElementById('max__point').innerHTML);
      max = Math.max(...record);
      document.getElementById('max__point').innerHTML = max;
    }

    // Don't repeat yourself - refactoring the code above
    else if (input !== random) {
      displayMessage("message", input > random ? "Too High 🔺" : "Too Low 🔻");
      point--;
      displayMessage("score__point", point);
    }
    return message;
  });
  randomMaker();

  
