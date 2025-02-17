const sumAll = function(int1, int2) {
    if (!(Number.isInteger(int1) && Number.isInteger(int2)) || 
    !((int1 > 0) && (int2>0))) {
        return "ERROR"
    }
    lower = Math.min(int1, int2)
    higher = Math.max(int1, int2)
    let sum = 0
    for (i=lower; i<=higher; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
