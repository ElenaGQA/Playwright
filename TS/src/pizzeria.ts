type Size = "small" | "medium" | "large";
type Pizza = {
    size: Size;
    toppings: string[];
    extraCheese?: boolean;
};

function orderPizza(pizza: Pizza): number {
    // function orderPizza(size: Pizza['size'], toppings: Pizza['toppings'], extraCheese: Pizza['extraCheese'] = false): number {
    const basePrice: number = 5;
    let toppingsPrice: number = pizza.toppings.length;
    let extraCheesePrice = 0;
    if (pizza.extraCheese) {
        extraCheesePrice = 2;
    }
    return basePrice + toppingsPrice + extraCheesePrice
};

const myPizza: Pizza = {
    size: "small",
    toppings: ["olives", "bacon", "peppers", "mashrooms"],
    // extraCheese: true,
}

const price = orderPizza(myPizza);
console.log(`The total is ${price}`)

