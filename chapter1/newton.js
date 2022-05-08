//Section 1.1.7

function abs(x){
    //predicate evaluation
    return x > 0 ? x : -x;
}

//This is function definition square. Its formal parameter is x
function square(x){
    return x * x;
}

square(2 + 5); //argument expression is 2 + 5. And the argument value is 5

function squareRoot_iter(guess, radicand){
    return isGoodEnough(guess, radicand) ? guess : squareRoot_iter(improve(guess, radicand), radicand)
}

//improve by averaging with the quotient of the radicand and old guess
function improve(guess, radicand){
    return average(guess, radicand / guess);
}

function average(x, y){
    return (x + y ) / 2;
}

function isGoodEnough(guess, rad){
    //the names guess and rad are bound to isGoodEnough.
    // abs and square are free. The meaning of the function is independent of its bound names
    //but not its free names
    return abs(square(guess) -rad) < 0.001;
}

//entry point
function squareRoot(x){
    return squareRoot_iter(1, x);
}

module.exports = {abs, square, average}
console.log(squareRoot(9))
console.log(squareRoot(4))