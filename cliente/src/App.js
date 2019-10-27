import React ,{Fragment}from 'react';
/*import logo from './logo.svg';
import './App.css';*/
import {ApolloProvider} from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Header from './componentes/layouts/Header';
import Clientes from './componentes/clientes/Clientes';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import EditarCliente from './componentes/clientes/EditarCliente'
import NuevoCliente from './componentes/clientes/NuevoCliente'
import NuevoProducto from './componentes/productos/NuevoProducto'
import NuevoPedido from './componentes/pedidos/NuevoPedido'
import Productos from './componentes/productos/Productos'
import EditarProducto from './componentes/productos/EditarProducto'
const client = new ApolloClient({
    uri:"http://localhost:8000/graphql",
    cache:new InMemoryCache({
      addTypename:false
    }),
    onError:({netWorkError,graphQLErrors})=>{
      console.log('graphQlErrors',graphQLErrors);
      console.log('netWorkError',netWorkError);

    }
});


function App (){
 
  return (
    <ApolloProvider client={client}>
      <Router>
     <Fragment>
     <Header/>
     <div className="container">
         <Switch>
             <Route exact path="/" component={Clientes}/>
             <Route exact path="/editar/:id" component={EditarCliente}/>
             <Route exact path="/clientes/nuevo" component={NuevoCliente}/>
             <Route exact path="/productos/nuevo" component={NuevoProducto}/>
             <Route exact path="/productos" component={Productos}/>
             <Route exact path="/productos/editar/:id" component={EditarProducto}/>
             <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido}/>
         </Switch>
     </div>
     </Fragment>
     </Router>
    </ApolloProvider>
   );
 
}

export default App;
