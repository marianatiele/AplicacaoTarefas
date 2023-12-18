const mongoose = require('mongoose');

async function main(){
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect('mongodb+srv://damascenonathy:ccRzctE6NKqMHo4q@cluster0.e6lb0xj.mongodb.net/?retryWrites=true&w=majority');
        console.log('conectado ao MongoDB Online')
    }catch(error){
        console.log(`erro: ${error}`)
    }


}

module.exports =  main;