var userno = document.getElementById("userno");
var remark = document.getElementById("remark");
var button = document.getElementById("button");
var scorevalue = document.getElementById("scores");
var randomnumber = Math.floor(Math.random() * 10 + 1);

var totalscore = 10;

function check() {
  var guessnumber = userno.value;

  if (randomnumber == guessnumber) {
    console.log("Correct Answer");
    remark.textContent = "Right Answer";

    alert("!!! YOU WON !!!");
  } else if (guessnumber == "") {
    alert("Enter any Number");
  } else {
    console.log("Wrong Answer");
    remark.textContent = "Wrong Answer";
    totalscore = totalscore - 1;
    console.log(totalscore);
    scorevalue.textContent = "Score : " + totalscore;
  }
}
