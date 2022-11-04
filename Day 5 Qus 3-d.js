//Question d:
var arr = [17, 9, 4, 5, 7, 1, 3, 2, 4, 11];


var prime = ((arr) => {
    var res = [];


    for (var x of arr) {
        var repeat = 0;
        for (var i = 2; i <= x / 2; i++) {

            if (x % i == 0) {
                repeat = 1;
                break;


            }
        }
        if (repeat == 0) {
            res.push(x)
        }
    }
    return res;


})
console.log(prime(arr))
