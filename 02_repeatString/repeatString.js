const repeatString = function(string, n_times) {
    let repeated_string = ''
    if (n_times < 0) {return 'ERROR'}
    for (i=1; i<n_times+1; i++) {
        repeated_string += string
    }
    return repeated_string
};

// Do not edit below this line
module.exports = repeatString;
