const removeFromArray = function(arr, ...manyMoreArgs) {
    for (i of manyMoreArgs) {
        idx = arr.indexOf(i);
        while (idx != -1) {
            arr = arr.toSpliced(idx, 1);
            idx = arr.indexOf(i);
        }        
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
