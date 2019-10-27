import React, { Component,Fragment } from 'react';
import {Query} from 'react-apollo';
import {CLIENTE_QUERY, CLIENTES_QUERY} from '../../queries';

const DatosCliente =({id})=>{

    return(
        <Fragment>
            <h2 className="text-center mb-3">Resumén de Cliente</h2>

            <Query query={CLIENTE_QUERY} variables={{id}} pollInterval={500}>
                {({loading,data,error,startPolling,stopPolling})=>{
                    if(loading)return 'cargando';
                    if(error) return `Error${error.message}`;
                    console.log(data)
                    const{nombre,
                        apellido,
                        domicilio,
                        rfc,
                        tipo,
                        emails}=data.getCliente;
                    return(
                        <ul className="list-unstyled my-5">
                            <li className="border font-weight-bold p-2">Nombre: 
                            <span className="font-weight-normal"> {nombre}</span>
                            </li>
                            <li className="border font-weight-bold p-2">Apellido: 
                            <span className="font-weight-normal"> {apellido}</span>
                            </li>
                            <li className="border font-weight-bold p-2">Domicilio: 
                            <span className="font-weight-normal"> {domicilio}</span>
                            </li>
                            <li className="border font-weight-bold p-2">RFC: 
                            <span className="font-weight-normal"> {rfc}</span>
                            </li>
                            <li className="border font-weight-bold p-2">Tipo: 
                            <span className="font-weight-normal"> {tipo}</span>
                            </li>
                            {emails.map((e,index)=>{
                                return(
                                <li key={e.email}className="border font-weight-bold p-2">Email {index+1}: 
                                <span className="font-weight-normal"> {e.email}</span>
                                </li>
                                )
                            })}

                        </ul>
                    )
                }}

            </Query>
        </Fragment>
    )
}
export default DatosCliente;