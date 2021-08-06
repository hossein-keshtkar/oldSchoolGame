  

let random;
let point;
let max;
let record = [];
point = parseInt(document.getElementById('score__point').innerHTML);

  document.getElementById('btn__again').addEventListener('click', function() {
    random = Math.trunc(Math.random() *20 + 1);
    document.body.style.background = 'rgb(35, 35, 48)';
    document.getElementById('questionMark').style.color= 'rgb(35, 35, 48)';
    document.getElementById('btn__again').style.color= 'rgb(35, 35, 48)';
    document.getElementById('btn__check').style.color= 'rgb(35, 35, 48)';
    document.getElementById('inputBox').style.background= 'rgb(35, 35, 48)';
    document.getElementById('questionMark').innerHTML= '?';
    document.getElementById("message").innerHTML= "Start guessing...";
    document.getElementById('score__point').innerHTML = 20;
    point = 20;
    return random;
  })

  document.getElementById('btn__check').addEventListener('click', function() {
    let input = document.getElementById('inputBox').value;
    input = parseInt(input);
    if (input === random){
      document.getElementById("message").innerHTML= "you won!🏆";
      document.body.style.background='green';
      document.getElementById('questionMark').style.color= 'green';
      document.getElementById('btn__again').style.color= 'green';
      document.getElementById('btn__check').style.color= 'green';
      document.getElementById('inputBox').style.background= 'green';
      document.getElementById('questionMark').innerHTML= random;
      record.push(point);
      max = parseInt(document.getElementById('max__point').innerHTML);
      max = Math.max(...record);
      document.getElementById('max__point').innerHTML = max;
    } else if (input > random) {
      document.getElementById("message").innerHTML= "Too High 🔺";
      point = parseInt(document.getElementById('score__point').innerHTML);
      point--;
      document.getElementById('score__point').innerHTML = point;
    } else {
      document.getElementById("message").innerHTML= "Too Low 🔻";
      point = parseInt(document.getElementById('score__point').innerHTML);
      point--;
      document.getElementById('score__point').innerHTML = point;
    }
    return message;
  });
  random = Math.trunc(Math.random() * 20 + 1);

  
