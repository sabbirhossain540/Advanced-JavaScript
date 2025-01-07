const http = require('http');
const app = require('./app');

const {
    loadPlanetsData
} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

async function startServer(){
    await loadPlanetsData();

    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}

startServer();




