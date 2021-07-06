const express = require('express');
const app = express();

const {Deck, Hand} = require('./deck/deck');

let deck = new Deck();
let hand = new Hand(deck, 5);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/play', (req, res) =>{
    res.send(hand.cards);
    console.log(deck.cards);
})

app.listen(8000, ()=> {
    console.log('Server running on port 8000');
})

