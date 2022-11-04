//Question c:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isPrime(num) {
    for (let start = 2; num > start; start++) {
        if (num % start === 0) {
            return false;
        }
    }
    return num;
}

console.log(array.filter(isPrime)); 
