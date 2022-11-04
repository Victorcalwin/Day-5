//Question b:
var array = ["victor", "preethi", "ovya", "jeudian"];
var res = ((array) => {
    for (i = -0; i < array.length; i++) {
        var y = array[i].split("")
        if (y[0].charCodeAt() >= 97 && y[0].charCodeAt() <= 122) {
            y[0] = String.fromCharCode(y[0].charCodeAt(0) - 32)

        }
        array[i] = y[0] + array[i].substring(1, y.length)
    }
    console.log(array.join(" "));
})
res(array)
