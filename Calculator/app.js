var screen = document.getElementById("screen");
var answer = document.getElementById("answer");

function calculator(num){
  screen.value += num;
  answer.value = eval(screen.value);
}

function total(){
   screen.value = answer.value;
   answer.value = "";
}

function clean(){
    screen.value = "";
    answer.value = "";
}

function backspace(){
var remove = screen.value;
remove = remove.slice(0, -1);
screen.value = remove;
answer.value = eval(screen.value);
}