"use strict";

window.addEventListener("DOMContentLoaded", init);

let text = document.querySelector(".typewritten").textContent;
let n = 0;

function init() {
    console.log("init");
    // get the text from somewhere
    document.querySelector(".typewritten").textContent;
    
    // clear the HTML area
    document.querySelector(".typewritten").innerHTML='';

    // start loop
    loop();
}

function loop(){
    console.log("loop");

    if (n < text.length) {
        document.querySelector(".typewritten").innerHTML += text.charAt(n);
        n++;
        setTimeout(loop, 300);
      }
 }