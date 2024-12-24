const express = require('express');

const app = express();
const port = 3000;

const friends = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Alex Carry',
    },
    {
        id: 3,
        name: 'Peter back',
    }
]

app.get('/', (req, res) => {
    res.json(friends);
})

app.get('/fri/:id', (req, res) => {
    console.log("Here");
    const firendId = req.params.id;
    const friend = friends[firendId];
    if(friend){
        res.json(friend);
    }else{
        res.status(404).send('Not Found');
    }

})

app.get('/message', (req, res) => {
    res.send('hello this is Node js Message');
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})