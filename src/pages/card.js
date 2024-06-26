const NUMERIC_VALUE_MAP = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export default class Card {
  constructor(suit, faceValue) {
    this.suit = suit;
    this.faceValue = faceValue;
    this.numericValue = NUMERIC_VALUE_MAP[faceValue];
    //passing constructor values to imagePath
    this.imagePath = `/public/images/${faceValue}${suit}.svg`;
    this.cardBackImagePath = "/public/images/B.svg";
    //faceUp is a boolean that will determine if the card is face up or face down
    this.faceUp = false;
    this.winningCard = false;
  }
}
