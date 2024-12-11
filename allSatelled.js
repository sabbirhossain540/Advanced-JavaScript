
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 500));
const promiseTwo = new Promise((resolve, reject) =>(
    setTimeout(reject, 1000)
))

/*
Promise.all() = Only return value when multiple promise are same like both return true or both return false
Promise.allSettled() = Always return promise result what ever its result is true or False
 */

Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
.catch(error => console.log(error));