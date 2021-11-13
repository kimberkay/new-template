
export default function PizzaOrder(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

  PizzaOrder.prototype.pizzaCost = function() {
    let baseCost = 0;
    if (this.size === "medium") {
      baseCost = 24;
    } else if (this.size === "large") {
      baseCost = 29;
    } else {

    }
    return baseCost;
  };


