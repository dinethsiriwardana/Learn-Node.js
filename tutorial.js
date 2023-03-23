const sum = (n1,n2) => n1 + n2;
const PI = 3.14;
class SomeMethObj {
    constructor() {
        console.log('object created');
    }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMethObj = SomeMethObj;

module.exports = {sum: sum, PI: PI, SomeMethObj: SomeMethObj};