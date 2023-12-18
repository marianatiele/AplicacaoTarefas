const router = require('express').Router();
const tarefasControllers = require('../controllers/tarefasControllers');

//criando o metodo Post


router.post('/tarefas', tarefasControllers.create);
//get
router.get('/tarefas',tarefasControllers.getAll);

//get unico
router.get('/tarefas/:id', tarefasControllers.get);

//delete
router.delete('/tarefas/:id', tarefasControllers.delete);

//put 
router.put('/tarefas/:id', tarefasControllers.update);

module.exports = router; 