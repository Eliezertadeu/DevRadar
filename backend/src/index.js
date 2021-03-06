const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

const { setupWebsocket } = require('./websocket');

const app = express();

const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-mtimh.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

app.use(cors());
app.use(express.json());

app.use(routes);

server.listen(3333);

// get, post, put, delete

// Tipos de parametros:
// Query Params: req.query (Filtros, ordenação, paginação)
// Route Params: req.params (Indentificar recurso na alteração ou remoção)
// Body req.body: (Dados para criação ou alterações de um registro)


// MongoDB (Não-relacional)
