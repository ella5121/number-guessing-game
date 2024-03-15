random = Math.floor(Math.random()*100)+1;
console.log(random);
let count = 0;

document.getElementById("submit").onclick = function(){
  count +=1;

  hello = document.getElementById("inputt");
  let c = "Hint: The Number Is Higher Than " + hello.value;
  let d = "Hint: The Number Is Lower Than " + hello.value;
  let e = "Result: You Won";
  let f = "Result: You Won";
  let g = "Hint: You Got The Number";
  let j = "You Lost";
  let k = "Hint: You didn't Get The Number";
  let p = "GAME OVER !!!" ;
  let q = "WINNER !!!" ;

  if(hello.value < random){
    document.getElementById("Higher").innerHTML = c;
  }
  else if(hello.value == random){
    document.getElementById("result").innerHTML = e;
    document.getElementById("Higher").innerHTML = g;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("heading").innerHTML = q;
  }
  else if(hello.value > random){
    document.getElementById("Higher").innerHTML = d;
  }

   if(count >= 7){
    document.getElementById("result").innerHTML = j;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("Higher").innerHTML = k;
    document.getElementById("heading").innerHTML = p;
  }
  else if(count == 6 && hello.value == random){
    document.getElementById("result").innerHTML = e;
    document.getElementById("Higher").innerHTML = g;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("heading").innerHTML = q;
  }
  else if(count == 6 && hello.value != random){
    document.getElementById("result").innerHTML = j;
    document.getElementById("answer").innerHTML = random;
    document.getElementById("Higher").innerHTML = k;
    document.getElementById("heading").innerHTML = p;
  }

  if (count == 4 && hello.value != random){
    window.prompt(" CAUTION: You Have 2 Guesses Left")
  }
  else if (count == 5 && hello.value != random){
    window.prompt(" CAUTION: You Have Only 1 Guess Left")
  }
  if(hello.value==""){
    count -=1;
    document.getElementById("Higher").innerHTML = "Hint: Please Insert Your Number!!!";
  }

  document.getElementById("ge").innerHTML = 6 - Number(count)

  hello.value = "";
  console.log(count);
}