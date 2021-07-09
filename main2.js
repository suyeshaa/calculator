var prev = "";
var curr = "";
var op = "";
var newNum = "";

function append(num) {
  if (num === "." && curr.includes(".")) {
    return;
  }
  if (isNaN(num) == false || num === ".") {
    curr += num;
    $(".inp-box").text(curr);
    console.log(curr);
  }
}

function compute(n) {
  $(".inp-box").text("");
  console.log(prev, n, curr);
  console.log(eval(prev + n + curr));
  curr = eval(prev + n + curr) + "";
  $(".inp-box").text(curr);
  prev = "";
}

function operation(num) {
  if (num === "+" || num === "-" || num === "*" || num === "/" || num === "=") {
    $(".inp-box").text("");
    if (curr === "") {
      return;
    }
    if (prev != "" || num === "=") {
      compute(oper);
    }

    if (num !== "=") {
      oper = num;
      prev = curr;
      curr = "";
    }
  }
}

function reset() {
  prev = "";
  curr = "";
  op = "";
  newNum = "";
  $(".inp-box").text("");
}

function delte() {
  curr = curr.substr(0, curr.length - 1);
  $(".inp-box").text(curr);
}

$("button").click((e) => {
  var txt = e.target.innerText;
  console.log(txt);
  append(txt);
  operation(txt);

  if (txt === "AC") {
    reset();
  }

  if (txt === "C") {
    delte();
  }
});
