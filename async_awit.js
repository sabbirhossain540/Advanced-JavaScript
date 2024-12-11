//Async/await is the part of ES8
//Its helpus to read the code easily.

//This is Promise based fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp =>resp.json())
    .then(console.log)

//This is async based function
async function fetchUser(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

fetchUser();


//Another Example
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//Promise Based Approach
Promise.all(urls.map(url =>{
    return fetch(url).then(response => response.json())
}))
    .then(result => {
        // console.log(result[0]);
        // console.log(result[1]);
        // console.log(result[2]);
    })
    .catch('OOps')


//Async Await Approach
const getData = async function(){
    const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(response => response.json())
    ))

    console.log(users);
    console.log(posts);
    console.log(albums);
}

//getData();

getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let item of arrayOfPromises) {
        const data = await item.json();
        console.log(data);
    }
}

getData2();


