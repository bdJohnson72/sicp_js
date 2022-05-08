const math = require('./newton')

//In this version the x is bound to the scope of squareRoot
//x gets its value in the enclosed functions from enclosing function
// Lexical Scoping 
function squareRoot(x){
    function isGoodEnough(guess){
        return math.abs(math.square(guess) -x) < .001;
    }
    function improve(guess){
        return math.average(guess, x / guess);
    }
    function squareRootIter(guess) {
        return isGoodEnough(guess) ? guess :
            squareRootIter(improve(guess));
    }
    return squareRootIter(1, x);
}