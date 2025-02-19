const fibonacci = function(n) {
    return n == 1 ? 1 : n == 2 ? 1 : fibonacci(n-2) + fibonacci(n-1)
};

// Do not edit below this line
module.exports = fibonacci;
