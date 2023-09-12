function calculator() {
    let price;
    let result;
    let radio2 = document.getElementById("radio2");
    let radio4 = document.getElementById("radio4");
    let radio6 = document.getElementById("radio6");
    let radio8 = document.getElementById("radio8");
    let blueCheese = document.getElementById("blueCheese");
    let cheese = document.getElementById("cheese");
    let ham = document.getElementById("ham");
    let mincedMeat = document.getElementById("mincedMeat");
    let mushroom = document.getElementById("mushroom");
    let olive = document.getElementById("olive");
    let paprika = document.getElementById("paprika");
    let pepperoni = document.getElementById("pepperoni");
    let pineapple = document.getElementById("pineapple");
    let redOnion = document.getElementById("redOnion");
    let shrimp = document.getElementById("shrimp");
    let tunaFish = document.getElementById("tunaFish");
    let deliveryOption = document.getElementById("deliveryOptions").value;
    let choices = 0;
  
    if (radio2.checked) {
      price = 7.5;
    } else if (radio4.checked) {
      price = 10.5;
    } else if (radio6.checked) {
      price = 12.5;
    } else if (radio8.checked) {
      price = 15.5;
    } else {
      price = 0;
    }
  
    if (blueCheese.checked) {
      choices += 1;
    }
  
    if (cheese.checked) {
      choices += 1;
    }
  
    if (ham.checked) {
      choices += 1;
    }
  
    if (mincedMeat.checked) {
      choices += 1;
    }
  
    if (mushroom.checked) {
      choices += 1;
    }
  
    if (olive.checked) {
      choices += 1;
    }
  
    if (paprika.checked) {
      choices += 1;
    }
  
    if (pepperoni.checked) {
      choices += 1;
    }
  
    if (pineapple.checked) {
      choices += 1;
    }
  
    if (redOnion.checked) {
      choices += 1;
    }
  
    if (shrimp.checked) {
      choices += 1;
    }
  
    if (tunaFish.checked) {
      choices += 1;
    }
  
    if (choices > 4) {
      price = price + (choices - 4) * 0.5;
    }
  
    if (deliveryOption === "homeDelivery") {
      price += 5;
    }
  
    //result.textContent = price;
    result = document.getElementById("price");
    result.textContent = String(price).replace(".", ",") + " €";
    console.log(price + " €");
    console.log(deliveryOption);
  }
  radio2.addEventListener("change", calculator);
  radio4.addEventListener("change", calculator);
  radio6.addEventListener("change", calculator);
  radio8.addEventListener("change", calculator);
  
  deliveryOptions.addEventListener("change", calculator);
  
  blueCheese.addEventListener("change", calculator);
  cheese.addEventListener("change", calculator);
  ham.addEventListener("change", calculator);
  mincedMeat.addEventListener("change", calculator);
  mushroom.addEventListener("change", calculator);
  olive.addEventListener("change", calculator);
  paprika.addEventListener("change", calculator);
  pepperoni.addEventListener("change", calculator);
  pineapple.addEventListener("change", calculator);
  redOnion.addEventListener("change", calculator);
  shrimp.addEventListener("change", calculator);
  tunaFish.addEventListener("change", calculator);
  
  /* size;
  topping;
  delivery; */
  
  /* else if (radio8.checked & (deliveryOption == homeDelivery)) {
      price = 20.5;
    } */
  