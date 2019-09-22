import React ,{Fragment}from 'react';
/*import logo from './logo.svg';
import './App.css';*/
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import EditarCliente from './componentes/EditarCliente'
import NuevoCliente from './componentes/NuevoCliente'



const client = new ApolloClient({
    uri:"http://localhost:8000/graphql",
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
             <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
             <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
           
         </Switch>
     </div>
     </Fragment>
     </Router>
    </ApolloProvider>
   );
 
}

export default App;
