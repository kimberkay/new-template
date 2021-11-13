import PizzaOrder from './../src/business.js';

describe('PizzaOrder', () => {

  test('should correctly create a  object with size and toppings', () => {
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.size).toEqual("large");
    expect(myPizza.toppings).toEqual(["mushroom","olives"]); 
  });

});
  /*test('should correctly get the number of years a person is over their life expectancy', () => {
    const myYears = new SolarYears(41,85);
    expect(myYears.yearsOver()).toEqual(-44);
  });
 
  test('should correctly refactor mercuryYears to work for all planets', () => {
    const myYears = new SolarYears(41,85);
    let this.planet = this.mercury;
    expect(myYears.onAnotherPlanetAge()).toEqual(171); 
});*/
