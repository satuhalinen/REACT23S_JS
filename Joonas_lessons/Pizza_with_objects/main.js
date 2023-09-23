class Pizza {
  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }
  getPrice() {
    return this.basePrice + this.toppings.length * 50;
  }
}

let americana = new Pizza("americana", ["blueCheese", "ham", "pineapple"], 10);

let mexicana = new Pizza(
  "mexicana",
  ["cheese", "jalapeno", "pineapple", "pepperoni"],
  11
);

let tropicana = new Pizza("tropicana", ["ham", "pineapple"], 12);

class Order {
  constructor(customerName, deliveryType, pizzas) {
    this.customerName = customerName;
    this.deliveryType = deliveryType;
    this.pizzas = pizzas;
  }
  addPizza(pizzaType) {
    return this.pizzas.push(pizzaType);
  }
  getPrice() {
    let totalPrice = 0;
    if (this.deliveryType == "delivery") {
      totalPrice = 20;
    }
    for (const element of this.pizzas) {
      totalPrice = totalPrice + element.getPrice();
    }
    return totalPrice;
  }
}

let firstOrder = new Order("Anna", "delivery", [
  americana,
  mexicana,
  tropicana,
]);
firstOrder.addPizza(mexicana);
console.log(firstOrder.getPrice());
