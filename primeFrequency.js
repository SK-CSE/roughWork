'use strict';

// https://www.geeksforgeeks.org/numbers-prime-frequencies-greater-equal-k/

const isPrime = num => {
    if (num === 1 || num > 2 && num % 2 === 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i = +2) {
        if (num % i === 0) return false;
    }
    return true;
};

const checkLargestNonPrimeFrequency = (arr, k) => {
    var max = -1;
    var countObj = {};
    arr.forEach(element => {
        if (countObj.hasOwnProperty(element)) {
            countObj[element]++;
        } else {
            countObj[element] = 1;
        }
    });

    for (let prop in countObj) {
        if (isPrime(countObj[prop]) && countObj[prop] > k) {
            console.log(prop);
        }
    }
};

checkLargestNonPrimeFrequency([11, 12, 13, 12, 12, 11, 13, 13], 2);