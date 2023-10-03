let firstCard = 12;
let secondCard = 20;
let sum = firstCard + secondCard
let blackjack = false
let message = ""


if(sum<21){
      message = "Do you want to draw a new Card"
}
else if(sum===21){
  message = "Wohooo! You got a BlackJack"
  blackjack = true
}
else{
  message = "You lost"
}

console.log(message)
