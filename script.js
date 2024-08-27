
function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
  const numberOfPeople = parseInt(document.getElementById("peopleNumber").value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Entrer un nombre valide!");
    return;
  }

  if (isNaN(serviceQuality) || serviceQuality < 0) {
    alert("Selectionner la qualité de service!");
    return;
  }

  if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
    alert("Entrer nombre valide!");
    return;
  }

  let total = (billAmount * serviceQuality) / numberOfPeople;
  let Total = (billAmount + billAmount * serviceQuality) / numberOfPeople;

  document.getElementById("tipTotal").innerHTML = total.toFixed(2);

  document.getElementById("billTotal").innerHTML = Total.toFixed(2);
}

document.getElementById("calculate").onclick = function () {
  calculateTip();
}

