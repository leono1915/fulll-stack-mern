import React, { Component,Fragment } from 'react';
import {Query} from 'react-apollo';
import {PRODUCTO_QUERY} from '../../queries';
import FormularioEditar from './FormularioEditarProducto';
export default class EditarProducto extends Component{
    state={

    }
    render(){
        const {id}=this.props.match.params;

        return(
            <Fragment>
                <h1 className="text-center mb-5">Editar Producto</h1>
            <div className="row justify-content-center">
                <Query query={PRODUCTO_QUERY} variables={{id}}>
                    {({loading,error,data,refetch}) =>{
                        if(loading) return 'Cargando..';
                        if(error)return `Error${error}`;
                        return(
                            <FormularioEditar
                            producto={data}
                            id={id}
                            refetch={refetch}
                            />

                           
                        )

                    }}
                </Query>
            </div>
            </Fragment>
        )
    }
}