import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'



export default class Productos extends Component{
    state={}

    render(){
        return(
            <form 
      className="col-md-8"
  >
      <div className="form-group">
          <label>Nombre:</label>
          <input 
              type="text"
              name="nombre" 
              className="form-control" 
              placeholder="Nombre del Producto"
          />
      </div>
      <div className="form-group">
          <label>Precio:</label>
          <div className="input-group">
              <div className="input-group-prepend">
                  <div className="input-group-text">$</div>
              </div>
              <input 
                  type="number" 
                  name="precio" 
                  className="form-control" 
                  placeholder="Precio del Producto"
              />
          </div>
      </div>
      <div className="form-group">
          <label>Stock:</label>
          <input 
              type="number" 
              name="stock" 
              className="form-control" 
              placeholder="stock del Producto" 
          />
      </div>
      <button 
          type="submit" 
          className="btn btn-success float-right">
              Crear Producto
      </button>
  </form>
        )
    }
}
