
function factorial(n){
    return n === 1 ? 1 : n * factorial(n - 1);
}

function factorial2(n){
    return factorialIter(1, 1, n);
}

//Iterative process. The function calls itself but variables manage state the entire time.
function factorialIter(product, counter, max) {
    return counter > max ? product
        : factorialIter(counter * product, counter + 1, max);
}

console.log(factorial(3))