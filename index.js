//  O(1)

function countToFifty (){
  for (i = 0; i < 50; i++){
    console.log(i);
  }
}

countToFifty()

// O(n)

function countNum (num) {
  for (i = 0; i < num; i++){
    console.log(i);
  }
}

countNum(75)

// O(x^2)


function doubleCountNums (num1, num2){
  for (i = 0; i < num1; i++){
    for (j = 0; j < num2; j++){
      console.log(j);
    }
  }
}

doubleCountNums(50,25);
