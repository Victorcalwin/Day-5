//Question c:
var arr = [21, 25, 88, 45, 97, 3, 21, 22, 36, 14];
var res = ((arr) => {
    var sum = 0;
    for (var x of arr) {
        sum = sum + x
    }
    console.log(sum)
})
res(arr);
