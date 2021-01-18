const express = require('express');

const app = express();

const port = 5000;
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});
//logger middleware
function logger(req, res, next) {
    console.table({method: req.method, path: req.url})
    next()
}
//use middleware
app.use(logger);

//pour ajouter tous les fichies ensemble on utilise
app.use(express.static(__dirname + '/Publicc'))

/*let currentHour = new Date().getHours()+10;
console.log(currentHour);

app.get('/', (req, res) => {
 if ((currentHour>8) && (currentHour<17)) res.sendFile(__dirname + '/Publicc/home.html');
 else res.sendFile(__dirname + '/Publicc/Serverclosed.html');
});*/

