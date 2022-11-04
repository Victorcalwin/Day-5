// Question b:
var array = ["satya", "sasi", "raju"];

let titleCaps = function () {
    for (i = -0; i < array.length; i++) {
        var y = array[i].split("")
        if (y[0].charCodeAt() >= y[0].charCodeAt()) {
            y[0] = String.fromCharCode(y[0].charCodeAt(0) - 32)

        }
        array[i] = y[0] + array[i].substring(1, y.length)
    }
    console.log(array);
}
titleCaps(array);


// IIFE function

(() => {
    for (i = -0; i < array.length; i++) {
        var y = array[i].split("")
        if (y[0].charCodeAt() >= y[0].charCodeAt()) {
            y[0] = String.fromCharCode(y[0].charCodeAt(0) - 32)

        }
        array[i] = y[0] + array[i].substring(1, y.length)
    }
    console.log(array);
})();

//Question 3:
let arr = [95, 65, 88, 25, 87, 26, 68];

let sum = arr.reduce((acc, cur) => {
    return acc + cur;

})
console.log(sum)
