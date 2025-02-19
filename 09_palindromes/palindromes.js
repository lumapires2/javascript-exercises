const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9 ]/g, "")
    str = str.toLowerCase()
    str = str.replace(/\s/g, "")
    for (i=0; i<Math.floor(str.length/2); i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
