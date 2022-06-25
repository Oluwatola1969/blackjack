let player = {
    name : "Tola",
    chips : 25
};
 
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById ("card-el")
let msg = document.getElementById('msg')
let playerEL = document.getElementById("player-el")

playerEL.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
    
}

function start() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardEl.textContent = "cards:" 
     
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "sum: " + sum
    if (sum < 21) {
        msg.textContent = "pick another card"
        isAlive = true
    } else if (sum === 21) {
        msg.textContent = "you've got a blackjack!"
        hasBlackJack = true
    } else {
        msg.textContent = "you lost😒"
        isAlive = false
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame()
 
    }

}



