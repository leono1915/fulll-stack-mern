 import React, { Component ,Fragment} from 'react'



 const Resumen=(props)=>{
     const productos=props.productos;
    
     if(productos===null){
         return(
             ''
         )
     }
     else if(productos.length===0){
        return (
            ''
        );
    }
      return(
        <Fragment>
            <h2 className="text-center my-5">Resumen y cantidades</h2>
            <table className="table">
                <thead className="bg-success text-light">
        <tr className="font.weigth-bold">
        <th>Productos</th>
        <th>Precio</th>
        <th>Inventario</th>
        <th>Cantidad</th>
            <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        {
         productos.map((e,index)=>{
             return(
            <tr key={e.id}>
                 <td>{e.nombre}</td>
                 <td>{e.precio}</td>
                 <td>{e.stock}</td>
                 <td><input min="1" type="number" className="form-control"
                 onChange={el=>{
                     if(el.target.value>e.stock){
                        el.target.value=0;
                        
                     }else if(el.target.value<0){
                        el.target.value=0;
                     }
                     props.actualizarCantidad(el.target.value,index)
                 }}
                 /></td>
                 <td><button className="btn btn-danger"
                  onClick={er=>{return(props.eliminarProducto(e.id))}}
                 >&times;Eliminar</button></td>

            </tr>
             )
         })
        }
        </tbody>
                
            </table>
        </Fragment>
      )
 }

 export default Resumen;