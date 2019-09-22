import React, { Component,Fragment } from 'react'
import {NUEVO_CLIENTE}  from '../mutations'
import {Mutation}  from 'react-apollo';
export default class NuevoCliente extends Component {
    state={
       cliente:{
           nombre:'',
           apellido:'',
           domicilio:'',
           email:'',
           rfc:'',
           tipo:''
       } 
    }
    render() {
        return (
            <Fragment>
            <h2 className="text-center">Nuevo cliente</h2>  
            <div className="row justify-content-center">

            <Mutation  mutation={NUEVO_CLIENTE} >
                
             {crearCliente=>(   
            <form className="col-md-8 m-3" 
             onSubmit={e=>{
                 e.preventDefault();
                 const{nombre,apellido,domicilio,email,rfc,tipo}=this.state.cliente;

                 const input = {
                    nombre,
                    apellido,
                    domicilio,
                    email,
                    rfc,
                    tipo
                 }
                 crearCliente({
                     variables:{input}
                 })
             }

             }
            >
   <div className="form-row">
       <div className="form-group col-md-6">
           <label>Nombre</label>
           <input type="text" className="form-control" placeholder="Nombre"
               onChange={e=>{
                   this.setState({
                       cliente:{
                           ...this.state.cliente,
                           nombre:e.target.value
                       }
                   })
               }}
           />
       </div>
       <div className="form-group col-md-6">
           <label>Apellido</label>
           <input type="text" className="form-control" placeholder="Apellido"
            onChange={e=>{
                this.setState({
                    cliente:{
                        ...this.state.cliente,
                        apellido:e.target.value
                    }
                })
            }}
           />
       </div>
   </div>
   <div className="form-row">
       <div className="form-group col-md-6">
           <label>Domicilio</label>
           <input type="text" className="form-control" placeholder="Domicilio"
            onChange={e=>{
                this.setState({
                    cliente:{
                        ...this.state.cliente,
                        domicilio:e.target.value
                    }
                })
            }}
           />
       </div>
       <div className="form-group col-md-6">
           <label>Email</label>
           <input type="email" className="form-control" placeholder="Email" 
            onChange={e=>{
                this.setState({
                    cliente:{
                        ...this.state.cliente,
                        email:e.target.value
                    }
                })
            }}
           />
       </div>
   </div>
   <div className="form-row">
       <div className="form-group col-md-6">
           <label>Rfc</label>
           <input type="text" className="form-control" placeholder="rfc"
            onChange={e=>{
                this.setState({
                    cliente:{
                        ...this.state.cliente,
                        rfc:e.target.value
                    }
                })
            }}
           />
       </div>
       <div className="form-group col-md-6">
           <label>Tipo Cliente</label>  
           <select  onChange={e=>{
                   this.setState({
                       cliente:{
                           ...this.state.cliente,
                           tipo:e.target.value
                       }
                   })
               }}
           className="form-control">
               <option value="">Elegir...</option>
               <option value="PREMIUM">PREMIUM</option>
               <option value="BASICO">BÁSICO</option>
           </select>
       </div>
   </div>
   <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
</form> 
)}
</Mutation> 
</div>
         </Fragment>
        )
    }
}
