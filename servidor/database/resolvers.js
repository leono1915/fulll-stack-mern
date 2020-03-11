import mongoose from 'mongoose';
import {Clientes,Productos,Pedidos} from './db';
import { rejects } from 'assert';


export const resolvers ={
    Query:{
        getClientes:(root,{limite,offset})=>{
            return Clientes.find({}).limit(limite).skip(offset);
        },
        getCliente:(root,{id})=>{
            return new Promise((resolve,object)=>{
                Clientes.findById(id,(error,cliente)=>{
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
    },
    totalClientes:(root)=>{
        return new Promise((resolve,object)=>{
            Clientes.countDocuments({},(error,count)=>{
                if(error) rejects(error)
                else resolve(count);
                
            })
        })
    },
    obtenerProductos:(root,{limite,offset})=>{
        return Productos.find({}).limit(limite).skip(offset);
    },
    obtenerProducto:(root,{id})=>{
        return new Promise((resolve,object)=>{
            Productos.findById(id,(error,Producto)=>{
                if(error) rejects(error)
                else resolve(Producto)
            });
        });
    },
    totalProductos:(root)=>{
        return new Promise((resolve,object)=>{
            Productos.countDocuments({},(error,count)=>{
                if(error) rejects(error)
                else resolve(count);
                
            })
        })
    },
    obtenerPedidos:(root,{cliente})=>{
        return new Promise((resolve,object)=>{
            Pedidos.find({cliente:cliente},(error,pedido)=>{
                if(error) rejects(error);
                else resolve(pedido);
            })
        })
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
            emails: input.emails,
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
        },
        nuevoProducto:(root,{input})=>{
            const nuevoProducto = new Productos({
                nombre:input.nombre,
                precio:input.precio,
                stock:input.stock
            });
            nuevoProducto.id=nuevoProducto._id;
            return new Promise((resolve,object)=>{
                nuevoProducto.save((error)=>{
                    if(error) rejects(error)
                else resolve(nuevoProducto) 
                })
            })
        },
        actualizarProducto :(root,{input})=>{
            return new Promise((resolve,object)=>{
                Productos.findOneAndUpdate({ _id:input.id }, input ,{new:true}, (error,Producto)=>{
                    if(error) rejects(error)
                    else resolve(Producto)
                });
            } );
        },
        eliminarProducto:(root,{id})=>{
            return new Promise((resolve,object)=>{
                Productos.findOneAndRemove({_id:id},(error)=>{
                    if(error) rejects (error)
                    else resolve("registro eliminado correctamente")
                });
            });
        },                                                               /*       here start mutation to crud of pedidos*/
        nuevoPedido:(root,{input})=>{
           const nuevoPedido=new Pedidos({
               pedido:input.pedido,
               total:input.total,
               fecha:new Date(),
               cliente:input.cliente,
               estado:'PENDIENTE'
           });
           nuevoPedido.id=nuevoPedido._id;
           return new Promise((resolve,object)=>{

            // resolver recorrer y actualizar la cantidad de productos
            input.pedido.forEach(pedido => {
                   Productos.updateOne({_id:pedido.id},
                    {"$inc":
                            {"stock":-pedido.cantidad}
                    },function(error){
                        if(error) return new Error(error)
                    }
                    )
            });
               nuevoPedido.save((error)=>{
                   if(error) rejects(error)
                   else resolve(nuevoPedido)
               })
           });
        }
    }
}

