function pizzaOven (crustType, sauceType, cheeses, toppings){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var Pizza1= pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
console.log(Pizza1);

var Pizza2= pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(Pizza2);

var Pizza3= pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni","olives"]);
console.log(Pizza3);

var Pizza4= pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], [ "olives", "onions", "chiken"]);
console.log(Pizza4);


