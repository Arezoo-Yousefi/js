const ingredients = ["pork", "tomato", "chicken", "lettuce", "beef", "carrots", "cucumber"]
const vegetarian = [ingredients[1], ingredients[3], ingredients[5], ingredients[6]];
let m = "";
for (let i = 0; i <= ingredients.length - 1; i++){
    m += ingredients[i] + " ";
}
console.log(`ingredient: ${m}`);
m = "";
for (let i = 0; i <= vegetarian.length - 1; i++){
    m += vegetarian[i]+" ";
}
console.log(`vegetarian: ${m}`);