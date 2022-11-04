//Question e:
var arr = [121, 1221, "bob", "nilin", "sasisas", "guvi", 1324];

var palindrome = (() => {
    var res = [];
    for (var x of arr) {
        var repeat = 0;
        var y = x.toString();
        for (i = 0; i <= y.length / 2; i++) {
            if (y.charAt(i) == y.charAt(y.length - i - 1)) {
                repeat = 1;

            }

        }
        if (repeat == 1) {
            res.push(x)
        }
    }
    return res;
})
console.log(palindrome(arr));
