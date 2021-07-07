var num = "";
var newNum = "";

var op = [];

$("button").click((e) => {
  var curr = e.target.innerText;
  console.log(e.target.innerText);
  if (isNaN(curr) == false) {
    num += curr;
    $(".inp-box").text(num);
  }

  if (curr == ".") {
    num += curr;
  }

  if (curr == "+") {
    op.push(num);
    op.push("+");
    num = "";
    console.log(op);
  }
  if (curr == "-") {
    op.push(num);
    op.push("-");
    num = "";
    console.log(op);
  }
  if (curr == "/") {
    op.push(num);
    op.push("/");
    num = "";
    console.log(op);
  }
  if (curr == "X") {
    op.push(num);
    op.push("*");
    num = "";
    console.log(op);
  }

  if (curr == "=") {
    op.push(num);
    // console.log(eval(op[0] + op[1] + op[2]));
    operations();
    num = "";
    // op = [];
    newNum = "";
  }

  if (curr == "DEL") {
    op.push(num);
    op.pop();
    console.log(op);
  }

  if (curr == "RESET") {
    op = [];
    num = "";
    newNum = "";
    $(".inp-box").text(num) = ""
  }
});

function operations() {
  op.forEach((el) => {
    newNum += el;
    console.log(newNum);
  });

  console.log(eval(newNum));
  $(".inp-box").text((newNum));
}

// document.querySelector("button").addEventListener("click", (e) => {
//   console.log();
// });
// console.log(document.querySelector("button").textContent);
