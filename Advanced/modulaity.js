var CircleOps = (function () {
    // --- Private stuff
    var pi = 3.1415926;
    var radSquare = function (rad) {
        return rad * rad;
    }

    // --- Public stuff
    return {
        PI: pi,
        calcArea: function (rad) {
            return this.PI * radSquare(rad);
        },
        calcPerimeter: function (rad) {
            return this.PI * 2 * rad;
        }
    };
})();

var x = 1.5;
//CircleOps.PI = 2;
var area = CircleOps.calcArea(x);
var perim = CircleOps.calcPerimeter(x);
var pi = CircleOps.PI;
console.log("value of PI: " + pi);
console.log("area: " + area);
console.log("perimeter: " + perim);