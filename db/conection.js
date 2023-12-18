const mongoose = require('mongoose');

async function main(){
    try{
        mongoose.set('strictQuery', true);

        await mongoose.connect('Link do mongo online');
        console.log('conectado ao MongoDB Online')
    }catch(error){
        console.log(`erro: ${error}`)
    }


}

module.exports =  main;
