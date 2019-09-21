import mongoose from 'mongoose';

moongose.Promise=global.Promise;

moongose.connect('mongodb://localhost/clientes',{UserNewUrlParser:true});