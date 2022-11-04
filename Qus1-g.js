//Question g:
var arr = [1, 2, 3, 1, 7, 2, 7, 2, 1, 1, 9, 4, 5, 8];

let result = function () {
    var res = [];
    for (i = 0; i < arr.length; i++) {
        var repeat = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] == res[j]) {
                repeat = 1;
            }
        }
        if (repeat == 0) {
            res.push(arr[i])
        }


    }
    console.log(res)
}

result();



//IIFE

(() => {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        var repeat = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] == result[j]) {
                repeat = 1;
            }
        }
        if (repeat == 0) {
            result.push(arr[i])
        }


    }
    console.log(result)
})(arr)
