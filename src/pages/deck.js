import Card from "./card.js";

const SUITS = ["S", "C", "D", "H"];
const FACE_VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
    this.disardPile = [];
  }

  get numberOfCards() {
    return this.cards.length;
  }
}
