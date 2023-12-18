const mongoose = require('mongoose');

const {Schema } = mongoose;

const serviceSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

const mongodb = mongoose.model("mongodb", serviceSchema);

module.exports =  {
    mongodb,
    serviceSchema,

};