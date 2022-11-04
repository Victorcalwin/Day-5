//Question 3 -a
var y = [100, 268, 33, 51, 90];

var res = ((arr) => {
    var odd = [];
    for (var x of arr) {




        if (x % 2 == 1) {
            odd.push(x);
        }
        else {
            continue;
        }
    }
    return odd;
})

console.log(res(y));
