//console.log(input1);

const buttonCheck = document.getElementById("check");
buttonCheck.addEventListener("click", function () {
  const div = document.createElement("div");

  const input1 = document.getElementById("input1");

  div.textContent = input1.value;
  document.querySelector("h3").appendChild(div);
});
