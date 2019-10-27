import React, { Component,Fragment } from 'react';
import DatosCliente from './DatosCliente';
import { Query } from 'react-apollo';
import {PRODUCTOS_QUERY} from '../../queries';
import '../../spinner.css';
import ContenidoPedido from '../../componentes/pedidos/ContenidoPedido';
export default class NuevoPedido extends Component {
    
    render() {
        const {id}=this.props.match.params;
        return (
            
           <Fragment>
               <h1 className="text-center mb-5">Nuevo Pedido</h1>
               <div className="row">
                   <div className="col-md-3">
                       <DatosCliente
                       id={id}
                       />
                   </div>
                   <div className="col-md-9">
                   <Query query={PRODUCTOS_QUERY}>
                    {({loading,error,data})=>{
                        if(loading) return(
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
                        if(error) return `Error${error.message}`;
                        return(
                            <ContenidoPedido
                            productos={data.obtenerProductos}
                            id={id}
                            />
                        )
                    }}
                   </Query>
                   </div>
               </div>
           </Fragment>
        )
    }
}
