function calculator() {
  let price = 0;
  let result;
  let circleResult;

  let deliveryOption = document.getElementById("deliveryOptions").value;
  let choices = 0;

  for (const item of toppings) {
    if (item.checked) {
      choices += 1;
    }
  }

  for (const item of radio) {
    if (item.checked) {
      price = item.value;
      price = parseFloat(price);
    }
  }

  if (choices > 4) {
    price = price + (choices - 4) * 0.5;
  }

  if (deliveryOption === "homeDelivery") {
    price += 5;
  }

  result = document.getElementById("price");
  circleResult = document.getElementById("priceCircle");
  result.textContent = String(price).replace(".", ",") + " €";
  circleResult.textContent = String(price).replace(".", ",") + " €";
  console.log(price + " €");
  console.log(deliveryOption);
}

deliveryOptions.addEventListener("change", calculator);

let toppings = document.querySelectorAll(".toppings input");
let radio = document.querySelectorAll(".size input");

for (const item of toppings) {
  item.addEventListener("change", calculator);
}

for (const item of radio) {
  item.addEventListener("change", calculator);
}
