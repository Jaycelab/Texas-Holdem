//Imports

//Evaluate

//Player
import Player from "./pages/player";
//Tables

//Decks
import Deck from "./pages/deck";
//Cards

//Actual Code
let deck = new Deck();
let player = new Player(deck.dealPlayer());
