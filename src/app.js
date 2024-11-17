/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = ("A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K");
  const simbols = ("♦", " ♥", "♠", "♣");
  const redSimbols = ("♦", " ♥");

  const randomNumbers = Math.floor(Math.random() * numbers.length);
  const randomSimbols = Math.floor(Math.random() * simbols.length);

  const simbol1 = document.getElementById("simbol");
  simbol1.innerText = simbols[randomSimbols];
  const number1 = document.getElementById("number");
  number1.innerText = numbers[randomNumbers];
  const simboltwo = document.getElementById("simbol2");
  simboltwo.innerText = simbols[randomSimbols];

  if (redSimbols.includes(simbols[randomSimbols])) {
    simbol1.classList.add("redpalos");
    simbol2.classList.add("redpalos");
  }
};
