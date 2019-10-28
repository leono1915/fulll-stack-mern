import React, { Component,Fragment } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Resumen from './Resumen';

class ContenidoPedido extends Component{
    state={
        productos:[],
        total:0
    }
    seleccionarProducto=(productos)=>{
         this.setState({
             productos
         })       
    }
    actualizarCantidad=(cantidad,index)=>{
       const productos=this.state.productos;
      
     
       productos[index].cantidad=Number(cantidad);
       this.setState({
        productos
        
    },
    ()=>{
        this.actualizarTotal();
    })
    
    }
    actualizarTotal=()=>{
      
        const productos=this.state.productos;
      
       if(productos.length===0){
           this.setState({
               total:0
           })
           return;
       }
       let nuevoTotal=0;
       productos.map(e=>nuevoTotal+=e.precio*e.cantidad);
      this.setState({
          total:nuevoTotal
      })

    }
    eliminarProducto=(id)=>{
       const productos=this.state.productos;
       const productosRestantes=productos.filter(produc=>produc.id!==id);
       this.setState({
           productos:productosRestantes
       },
       ()=>{
        this.actualizarTotal();
    })
    }
    render(){
        return(
<Fragment>
            <h2 className="text-center mb-5" >seleccionar artículos</h2>
           <Select options={this.props.productos}
           onChange={this.seleccionarProducto}
           isMulti={true}
           components={makeAnimated()}
           placeholder={'Seleccionar Productos'}
           getOptionValue={(options)=> options.id}
           getOptionLabel={(options)=> options.nombre}
           value={this.state.productos}
           />
           <Resumen  productos={this.state.productos}
           actualizarCantidad={this.actualizarCantidad}
           eliminarProducto={this.eliminarProducto}
           />
           <p className="font-weight-bold float-right mt-3">
            Total: <span className="font-weight-normal"> ${this.state.total}</span>
           </p>
           </Fragment>
        )
    }
}
export default ContenidoPedido;