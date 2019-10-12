//Blackjack from Mark Zamoyta
//by Elizabeth Ekanem'
//
let suits = ['Hearts'. 'Club', 'Diamond', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
     'Ten', 'Nine', 'Eight', 'Seven', 'Six',
     'Five', 'Four', 'Three', 'Two'];

let deck =  [ 
];

for(let suitIdx=0; suitIdx<suits.length; suitIdx++){

    for(let valueIdx=0; valueIdx<values.length; values++){
        deck.push(values[valueIdx]+ 'of' + suits[suitIdx]);
    }
}

for(let i=0; i<deck.length; i++){
    console.log(deck[i]);
}

let playerCard = [ deck[0], deck[2] ];
let card1 = "Ace of Spades";
    card2 =  "Ten of Hearts";

console.log("Welcome to Blackjack!"), 
console.log("You are dealt: ");
console.log(" " + playerCards[1]);
console.log(" " + playerCards[2]);
