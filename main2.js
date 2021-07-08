var prev = "";
var curr = "";
var op = "";
var newNum = "";

function append(num) {
  if (isNaN(num) == false || num === ".") {
    curr += num;
    console.log(curr);
  }
}

compute(){

}

function operation(num) {
  if (num === "+" || num === "-" || num === "*" || num === "/") {
    if (curr === "") {
      return;
    }
    if (prev != "") {
      compute();
    }
    oper = num;
    prev = curr;
    curr = "";
  }
}

$("button").click((e) => {
  console.log(e.target.innerText);
  append(e.target.innerText);
});
