import PizzaOrder from './../src/business.js';

describe('PizzaOrder', () => {

  test('should correctly create a  object with size and toppings', () => {
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.size).toEqual("large");
    expect(myPizza.toppings).toEqual(["mushroom","olives"]); 
  });


  test('should correctly return the updated cost', () => {
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.pizzaCost()).toEqual(31.50);
  });

  test('should correctly return toppings cost', () => {
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.addToppings()).toEqual(2.50);
  });
  

  test('should correctly return total pizza cost', () => {
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    const myPizza2 = new PizzaOrder("medium", ["pineapple", "spinach", "peppers"])
    expect(myPizza.pizzaCost()).toEqual(31.50);
  });
});



//   git add _tests_/test.js src/business.js