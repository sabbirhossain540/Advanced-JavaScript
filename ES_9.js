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

const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
    'https://jsonplaceholder.typicode.com/users/4',
]


Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
))
    .then(results => {
        //throw Error
        console.log(results[0]);
    })
    .catch(err => console.log("OOPS"))
    .finally(() => console.log('Finished'));
