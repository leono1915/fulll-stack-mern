import gql from 'graphql-tag';



 export const CLIENTES_QUERY =gql`

 query getClientes( $limite: Int, $offset: Int) {

    getClientes(limite: $limite, offset: $offset){
        id
        nombre
        apellido
        domicilio
        rfc
        tipo
        emails{
            email
        }
       
    }
    totalClientes
     }
 
`


export const CLIENTE_QUERY =gql `
query ConsultarClientes($id:ID){
    getCliente(id: $id){
        id
        nombre
        apellido
        domicilio
        rfc
        tipo
        emails{
            email
        }
    }

}`


export const PRODUCTOS_QUERY =gql`

 query obtenerProductos( $limite: Int, $offset: Int) {

    obtenerProductos(limite: $limite, offset: $offset){
        id
        nombre
        precio
        stock
        
    
     }
     totalProductos
 
 }`


export const PRODUCTO_QUERY =gql`
query ConsultarProductos($id:ID){
    obtenerProducto(id: $id){
        id
        nombre
        precio
        stock
    }

}`

export const PEDIDO_QUERY= gql `

query consultarPedidos($cliente:String){
      obtenerPedidos(cliente:$cliente){
       
        id
        pedido{
            id
            cantidad
        } 
        total
        fecha
        cliente
        estado 
        
      }
}
`

