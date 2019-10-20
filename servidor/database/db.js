import mongoose from 'mongoose';

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/clientes',{UseNewUrlParser:true});


//definir los clientes

const clienteSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    domicilio:String,
    rfc:String,
    emails:Array,
    tipo:String,
    pedidos:Array


});

const Clientes=mongoose.model('clientes',clienteSchema);
export {Clientes}; 
