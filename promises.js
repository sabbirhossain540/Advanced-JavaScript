//A promise is an object that may produce a single value some time in the future
// Either a resoleved value , or a reason that its not resolved (rejected)
/* Promises have three possible state
1. Fullfield
2. Rejected
3. Pending
 */
//Callback - when we ask some thing to my friend and my friend answer me based on my question. It can tell it callback.
// Promise is very good in asynchinise programming


/*
// Callback function example
GrabTweet('twitter/hossainSabbir', (error, sabbirTweets) => {
    if(error){
        return error;
    }
    displayTwitter(sabbirTweets);

    grabTweet('twitter/allenTweet', (error, allenTweets) => {
        if(error){
            return error;
        }

        displaytwitter(allenTweets);
    });
})

 */

//Promise example
const  promise = new Promise((resolve, reject) => {
    if(true){
        resolve('Stuff Worked');
    }else{
        reject('Error, it broke');
    }
})

const  promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'hiii');
})

const  promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Doyel');
})

const  promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'This is me what you are looking for');
})

Promise.all([promise, promise2, promise3, promise4])
    .then(result =>{
        console.log(result);
    })

promise
    .then(result => {
        //throw error;
        return result + '!';
    })
    .then(response => {
        console.log(response);
    })
.catch(error => {
    console.log(error);
})

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>{
    return fetch(url).then(response => response.json())
}))
.then(result => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
})
.catch((error) => {
    console.log(error);
})