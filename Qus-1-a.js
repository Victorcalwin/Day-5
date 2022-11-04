// Question 1 - a
//Print odd numbers in an array

//anonymous function

let result = function () {
    let arr = []
    for (i = 0; i < 100; i++) {
        let number = arr.push(i)
    }
    let odds = arr.filter(n => n % 2)

    console.log(odds);
}
result();

// IIFE function

(() => {
    let arr = []
    for (i = 0; i < 100; i++) {
        let number = arr.push(i)
    }
    let odds = arr.filter(n => n % 2)

    console.log(odds);
})();
