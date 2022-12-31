const sumAll = function(min, max) {
    let finalResult = 0;
    const errorMessage = 'ERROR';
    if (min < max) {
        for (let i = min; i <= max; i++) {
            finalResult += i;
        }
        return finalResult;
    } else if (min > max) {
        for (let i = max; i <= min; i++) {
                finalResult += i;
        }
        return finalResult;
    } else if (min < 0 || max < 0) {
        for (let i = min; i <= max; i++) {
            return errorMessage;
        }
    } else if (typeof min !== 'number' || typeof max !== 'number') {
        return errorMessage;
    };
};

// Do not edit below this line
module.exports = sumAll;
