const express = require('express');
const cors = require('cors');
const connect  = require('./db/conection')
const router = require('./routes/tarefas')
const app = express()
app.use(express.json());
const port = 4000;

app.use(cors());

//banco dados 
connect();
//rotas da api
app.use('/api', router);
// app.use(router);



// app.get('/', (req, res) =>{
//     res.send('Olha maria')
// })



app.listen(port,  function() {
console.log(`Servirdor rodando http://localhost:${port}`)

});