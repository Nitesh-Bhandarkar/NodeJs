function giveMeFunctions() {
    var functions = [];
    for (var i = 0; i < 4; i++) {
        console.log('i is ==>', i);
        functions[i] = function () {
            console.log(i);
            return i * i;
        }
    }
    return functions;
}

var myFunctions = giveMeFunctions();
for (var i = 0; i < 4; i++) {
    console.log(i + ": " + giveMeFunctions()[i]());
}