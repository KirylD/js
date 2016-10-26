function Accumulator(x) {
    this.x = x;

    this.read = function (a) {
        this.x += a;
    }
}

var accum = new Accumulator(5);
accum.read(3);
accum.read(3);
console.log(accum.x);