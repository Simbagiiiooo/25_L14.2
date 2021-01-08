// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


let calculateSupply = function(age, amoundPerDay) {
    let totalSupply =  Math.round((amoundPerDay * 365) * age);
    console.log('You will need ' + totalSupply + ' to last you until the ripe old age of ' + age);
};

calculateSupply(100, 2.4);
calculateSupply(85, 1.1);
calculateSupply(75, 20);