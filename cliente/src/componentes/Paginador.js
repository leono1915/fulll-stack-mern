import React, { Component } from 'react'


export default class Paginador extends Component{
    state={
       Paginador:{
           actual:this.props.actual,
           paginas:Math.ceil(Number(this.props.total)/this.props.limite)
       }
    }
    
    render(){
       console.log(this.state.Paginador.actual+"soy actual")
     const {actual}=  this.props;
     const {paginas}=this.state.Paginador;
        const btnAnterior=(actual>1)? <button className="btn btn-success mr-2"
        onClick={this.props.paginaAnterior}
        >&laquo;Anterior</button>:
        "";
        const btnSiguiente =(actual!==paginas)? <button className="btn btn-success"
        onClick={this.props.paginaSiguiente}
        > Siguiente&raquo;</button>:"";
   
        return(
          <div className="mt-5 d-flex jutify-content-center">
         {btnAnterior}
         {btnSiguiente}

          </div>
        )
    }
}