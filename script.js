function calculatetip(event) {
event.preventDefault();
let bill = document.getElementById('bill').value;
let servicequality = document.getElementById('servicequality').value;
let numofpeople = document.getElementById('people').value;

if (bill =='' | servicequality == 0  ) {
alert("Por favor, Preencha os campos abaixo.")
return;
  }

  if (numofpeople == '' | numofpeople <= 1) {
    numofpeople = 1;
    document.getElementById('each').style.display = "none"
  } else {
    document.getElementById('each').style.display = "block"
  }

  let total = (bill * servicequality) / numofpeople;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totaltips').style.display = "block";
}

document.getElementById('totaltips').style.display ="none";
document.getElementById('each').style.display ="none";
document.getElementById('tipsform').addEventListener("submit", calculatetip);
