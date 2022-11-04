//Question h:
var arr = [1, 2, 3, 4, 6];

var k = 2;

let result = function () {
    var res = [];
    var n = arr.length;
    k = k % n;
    for (i = 0; i < arr.length; i++) {
        if (i < k) {
            res[i] = arr[n - k + i]
        }
        else {
            res[i] = arr[i - k]
        }
    }
    console.log(res)

}
result(arr);

//IIFE

(() => {

    var res = [];
    var n = arr.length;
    k = k % n;
    for (i = 0; i < arr.length; i++) {
        if (i < k) {
            res[i] = arr[n - k + i]
        }
        else {
            res[i] = arr[i - k]
        }
    }
    console.log(res)


})(arr, k)
