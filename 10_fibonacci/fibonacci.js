const fibonacci = function(n) {
    n = parseInt(n);
    return n<0? "OOPS": n == 0? 0 : n == 1 ? 1 : n == 2 ? 1 : fibonacci(n-2) + fibonacci(n-1)
};

// Do not edit below this line
module.exports = fibonacci;
