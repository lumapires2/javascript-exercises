const reverseString = function(string) {
    string = string.toString()
    let reverse = ''
    for (i=string.length - 1; i>=0; i--){
        reverse += string[i]
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
