import React, { Component,Fragment } from 'react'
import {NUEVO_CLIENTE}  from '../../mutations'
import {Mutation}  from 'react-apollo';
export default class NuevoCliente extends Component {
    state={
       cliente:{
           nombre:'',
           apellido:'',
           domicilio:'',
           rfc:'',
           tipo:''
       } ,
       error:false,
       emails:[]
    }
    leerCampo =(i)=>(e)=>{
       //console.log(i+e.target.value)
       const nuevoEmail=this.state.emails.map(function(email,index) {
           if(i!==index) return email;
           return{
               ...email,
               email:e.target.value
           }
       });
        this.setState({
            emails:nuevoEmail
        })
    }
    nuevoCampo=()=>{
       // console.log('click');
       this.setState({
           emails:this.state.emails.concat([{email:''}])
       });

    }
    eliminarCampo=(i)=>()=>{
        console.log(i);
        this.setState({
           emails:this.state.emails.filter(
               function (email,index) 
               {   //console.log(" estt"+index+" "+i+" "+i!==index)
                   return i !==index})
        })
    }
    render() {
        const {error}=this.state;
           let respuesta=(error) ?<p className="alert alert-danger p-3 text-center">Todos los campos son obligatorios</p>:'';
        return (
            <Fragment>
            <h2 className="text-center">Nuevo cliente</h2>  
            {respuesta}
            <div className="row justify-content-center">

            <Mutation  mutation={NUEVO_CLIENTE} 
                       onCompleted={()=>this.props.history.push('/')}
            >
                
             {crearCliente=>(   
            <form className="col-md-8 m-3" 
             onSubmit={e=>{
                 e.preventDefault();
                 const{nombre,apellido,domicilio,rfc,tipo}=this.state.cliente;
                 const {emails}=this.state;
                 console.log(emails)
                    if(nombre===''||apellido===''||domicilio===''||rfc===''||tipo===''){
                        this.setState({
                            error:true
                        });
                        return;
                    }
                    this.setState({
                        error:false
                    });

                 const input = {
                    nombre,
                    apellido,
                    domicilio,
                    rfc,
                    tipo,
                    emails
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
       <div className="form-group col-md-12">
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
       {this.state.emails.map((input,index )=> (
              <div key={index} className="form-group col-md-12"> 
                    <label > Correo :{index+1} </label>
                    <div className="input-group">
                    <input type="email" placeholder="email" className="form-control"
                     onChange={this.leerCampo(index,input)}
                    /> 
                    <div className="input-group-append">
                    <button  type="button" onClick={this.eliminarCampo(index)} className="btn btn-danger">x Eliminar</button>
                    </div>
                    </div>
              </div>
             ))}
       <div className="form-group d-flex justify-content-center col-md-12">
         <button type="button" className="btn btn-warning" onClick={this.nuevoCampo}  >+ Agregar email </button>
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
