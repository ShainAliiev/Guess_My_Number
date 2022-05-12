//console.log(input1);
const again = document.getElementById("again");
const input1 = document.getElementById("input1");
const input2 = document.querySelector("#input2");
const check = document.getElementById("check");
const question = document.getElementById("question");
const pl1score = document.getElementById("pl1score");
const pl2score = document.querySelector("#pl2score");
const high = document.getElementById("high");
const highscore = document.querySelector("#highscore");

//const div = document.createElement("div");

again.addEventListener("click", function () {
  const number = Math.floor(Math.random() * 5) + 1;
  question.textContent = "?";
  pl1score.textContent = "Player1-  20";
  input1.value = "";
  input2.textContent = "";
  console.log(number);

  let i = 20;
  let i1 = 20;

  check.addEventListener("click", function () {
    //div.textContent = input1.value;
    //document.querySelector("h3").appendChild(div);

    if (Number(input1.value) === number) {
      question.textContent = number;
      high.textContent = "Player1 Won!";
      highscore.textContent = `High score-  ${i}`;
    } else if (Number(input1.value) > number) {
      i--;
      high.textContent = "Too high!";
      pl1score.textContent = `Player1-  ${i} `;

      setTimeout(() => {
        let number2 = Math.floor(Math.random() * 5) + 1;
        input2.textContent = number2;
        if (number2 === number) {
          high.textContent = "Player2 Won!";
          highscore.textContent = `High score- ${i1}`;
          question.textContent = number;
        } else if (number2 > number) {
          high.textContent = "Too high!";
          i1--;
          pl2score.textContent = `Player2- ${i1}`;
        } else {
          high.textContent = "Too low!";
          i1--;
          pl2score.textContent = `Player2- ${i1}`;
        }
      }, 2000);
    } else {
      i--;
      high.textContent = "Too low!";
      pl1score.textContent = `Player1-  ${i}`;
      setTimeout(() => {
        let number2 = Math.floor(Math.random() * 5) + 1;
        input2.textContent = number2;
        if (number2 === number) {
          high.textContent = "Player2 Won!";
          highscore.textContent = `High score- ${i1}`;
          question.textContent = number;
        } else if (number2 > number) {
          high.textContent = "Too high!";
          i1--;
          pl2score.textContent = `Player2- ${i1}`;
        } else {
          high.textContent = "Too low!";
          i1--;
          pl2score.textContent = `Player2- ${i1}`;
        }
      }, 2000);
    }
  });
});
