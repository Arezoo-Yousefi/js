let tripExpences = [300, 500, 1000];
let budget = tripExpences.reduce((sum, currentValue) =>{
    return sum + currentValue;
})
console.log(`hotel: ${tripExpences[0]}, trip: ${tripExpences[1]}, meals: ${tripExpences[2]}`);
console.log(`total trip budget: ${budget}`);