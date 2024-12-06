//Object Spread Operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey:2
}

const {tiger, ...rest} = animals;
console.log(tiger);
console.log(rest);

function sum(a, b, c, d, e){
    return a+b+c+d+e;
}

const arr = [1,2,3,4,5];
console.log(sum(...arr));
