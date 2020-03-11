import React, { Fragment } from 'react'
import {withRouter} from 'react-router-dom';
import {Query} from 'react-apollo';
import {PEDIDO_QUERY} from '../../queries';
import {PRODUCTO_QUERY} from '../../queries';
import '../../spinner.css';
const PedidosCliente= (props)=>{
    console.log(props)
    const cliente =props.match.params.id;
    return(
        <Fragment>
           <h1 className="text-center">Pedidos Cliente</h1>
           <div className="row">
            <Query query={PEDIDO_QUERY} variables={{cliente}} pollInterval={500}> 
                {({loading,error,data,startPolling,stopPolling})=>{
                    if(loading) return (
                        <div  className="sk-circle">
                        <div className="sk-circle1 sk-child"></div>
                        <div className="sk-circle2 sk-child"></div>
                        <div className="sk-circle3 sk-child"></div>
                        <div className="sk-circle4 sk-child"></div>
                        <div className="sk-circle5 sk-child"></div>
                        <div className="sk-circle6 sk-child"></div>
                        <div className="sk-circle7 sk-child"></div>
                        <div className="sk-circle8 sk-child"></div>
                        <div className="sk-circle9 sk-child"></div>
                        <div className="sk-circle10 sk-child"></div>
                        <div className="sk-circle11 sk-child"></div>
                        <div className="sk-circle12 sk-child"></div>
                       </div>
                    )
                    if(error) return ` Error  ${error.message}`;
                    console.log(data);  
                    return   (
                    data.obtenerPedidos.map(e=>{
                        return(
                            <div className="col-md-4">
                            <div className={`card mb-3`} >
                                <div className="card-body">
                                    <p className="card-text font-weight-bold ">Estado:
                                           
                         <select className="form-control my-3"
                         
                         value={e.estado}
                         onChange={i=>{
                             const input={
                             estado:i.target.value
                             }
                           
                            
                         }}
                         
                         >
                                              
                      

                                              <option value="PENDIENTE">PENDIENTE</option>
                                    <option value="COMPLETADO">COMPLETADO</option>
                                    <option value="CANCELADO">CANCELADO</option>
                            
                                              
               
                                                  
                                                   
                                            </select>
                                    </p> 
                                    <p className="card-text font-weight-bold">Pedido ID: 
                                        <span className="font-weight-normal">{e.id}</span>
                                    </p> 
                                    <p className="card-text font-weight-bold">Fecha Pedido: 
                                        <span className="font-weight-normal"> {new Date(Number(e.fecha)).toLocaleString('es-MX')}</span>
                                    </p>
                                    <p className="card-text font-weight-bold">Total:  
                                        <span className="font-weight-normal"> {e.total}</span>
                                    </p>
                
                                    <h3 className="card-text text-center mb-3">Artículos del pedido</h3>

                                    {e.pedido.map((producto,i)=>{
                                        const {id}=producto;
                                        return (
                                           <Query   key={e.id} query={PRODUCTO_QUERY} variables={{id}}>
                                               {({loading,error,data})=>{
                                                   if(loading) return 'Cargando..';
                                                   if(error) return `Error ${error.message}`;
                                                    console.log(data)
                                                   return(
                                                       <div className=' border mb-4 p-4'>
                                                           <p className='card-text font-weight-bold'>
                                                             #{i+1} <span className='font-weight-normal'>
                                                                         
                                                             </span>
                                                           </p>
                                                           <p className='card-text font-weight-bold'>
                                                             Nombre producto: <span className='font-weight-normal'>
                                                                      {data.obtenerProducto.nombre}    
                                                             </span>
                                                           </p>
                                                           <p className='card-text font-weight-bold'>
                                                             Cantidad: <span className='font-weight-normal'>
                                                                      {producto.cantidad}    
                                                             </span>
                                                           </p>
                                                           <p className='card-text font-weight-bold'>
                                                             Precio producto: <span className='font-weight-normal'>
                                                                      $ {data.obtenerProducto.precio}    
                                                             </span>
                                                           </p>
                                                           <p className='card-text font-weight-bold'>
                                                             Stock producto: <span className='font-weight-normal'>
                                                                       {data.obtenerProducto.stock}    
                                                             </span>
                                                           </p>
                                                       </div>
                                                   )
                                               }}
                                           </Query>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        )
                    })
                    )
                }}
            </Query>
           </div>
        </Fragment>
      
    )
}

export default  withRouter(PedidosCliente);