const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
var cors = require('cors')

app.use(express.static(process.cwd()+"/client/dist/client/"));
app.use(cors())

// mongo

const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.get('/api/books', (req, res) => {
    const uri = "mongodb+srv://ilham:ilham155@cluster0.er9as.mongodb.net/iqra?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const books = client.db("iqra").collection("books");
        const books_list = books.find({}); 
        books_list.toArray((err, doc) => {
            return res.send(JSON.stringify(doc));
        });
        client.close();
    });

})

app.listen(port, () => console.log('yollooo '));