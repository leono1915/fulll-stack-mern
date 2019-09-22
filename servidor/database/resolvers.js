import mongoose from 'mongoose';
import {Clientes} from './db';
import { rejects } from 'assert';

class Cliente{
    constructor(id,{nombre,apellido,domicilio,email,tipo,pedidos}){
              this.id=id;
              this.nombre=nombre;
              this.apellido=apellido;
              this.domicilio=domicilio;
              this.email=email;
              this.tipo=tipo;
              this.pedidos=pedidos;
    }

}


export const resolvers ={
    Query:{
        getClientes:(root,{limit})=>{
            return Clientes.find({}).limit(limit);
        },
        getCliente:(root,{id})=>{
            return new Promise((resolve,object)=>{
                Clientes.findById(id,(error,cliente)=>{
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
    }
    },
    Mutation:{
        crearCliente :(root,{input})=>{
           // const id=require('crypto').randomBytes(10).toString('hex');

           const nuevoCliente =new Clientes({
            nombre: input.nombre,
            apellido: input.apellido,
            domicilio:input.domicilio,
            rfc:input.rfc,
            email: input.email,
            tipo: input.tipo,
            pedidos: input.pedidos

           });
           nuevoCliente.id=nuevoCliente._id;
           return new Promise((resolve,object)=>{
               nuevoCliente.save((error)=>{
                if(error) rejects(error)
                else resolve(nuevoCliente)

                
               });

           });
         
    
        },
        actualizarCliente :(root,{input})=>{
            return new Promise((resolve,object)=>{
                Clientes.findOneAndUpdate({ _id:input.id }, input ,{new:true}, (error,cliente)=>{
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            } );
        },
        eliminarCliente:(root,{id})=>{
            return new Promise((resolve,object)=>{
                Clientes.findOneAndRemove({_id:id},(error)=>{
                    if(error) rejects (error)
                    else resolve("registro eliminado correctamente")
                });
            });
        }
        
    }
}

