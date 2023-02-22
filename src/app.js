/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suit = ["♦", "♥", "♠", "♣"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let cardSuit = suit[Math.floor(Math.random() * suit.length)];
  if (cardSuit == "♦" || cardSuit == "♥") {
    document.querySelector(".container-fluid").style.color = "red";
  }
  let cardNumber = number[Math.floor(Math.random() * number.length)];
  document.querySelector(".suitTop").innerHTML = cardSuit;
  document.querySelector(".cardNumber").innerHTML = cardNumber;
  document.querySelector(".suitBottom").innerHTML = cardSuit;
  console.log("Hello Rigo from the console!");
};
