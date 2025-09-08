let userNum = document.querySelector(".box input");
let btn = document.querySelector(".box button");
let msg = document.querySelector("#guess");
let score = document.querySelector("#score");
let chance = 0;
let num = Math.floor(Math.random()*10);


btn.addEventListener("click", () => {
    let value = Number(userNum.value);
    console.log(value);
    chance++;
    if (value > 10 || value < 1) {
        msg.innerText = "Invalid Number,\n Guess Between 1-10.";
        msg.style.display = "block";
    } else if (value == num) {
        msg.innerText = "You guessed it right.";
        msg.style.display = "block";
        score.innerText = `Score :- ${10 - chance}`;
        score.style.display = "block";
    } else if (value < num) {
        msg.innerText = "Your num is too low";
        msg.style.display = "block";
    } else if(value > num) {
        msg.innerText = "Your num is too high";
        msg.style.display = "block";
    }

})


