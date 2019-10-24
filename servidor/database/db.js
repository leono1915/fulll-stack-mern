import mongoose, { mongo } from 'mongoose';

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/clientes',{UseNewUrlParser:true});
mongoose.set('setFindAndModify',false);

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
const productosSchema = new mongoose.Schema({
    nombre:String,
    precio:Number,
    stock:Number
})
const Productos=mongoose.model('productos',productosSchema);
const Clientes=mongoose.model('clientes',clienteSchema);
export {Clientes,Productos}; 
