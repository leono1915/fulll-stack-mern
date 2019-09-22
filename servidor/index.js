import express from 'express';

import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './database/schema';
import {resolvers} from './database/resolvers';


const app=express();

app.get('/',(req, res) => {
     res.send('todo listo');
});

const server=new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({app});
app.listen({port:8000},()=>console.log(`servidor corriendo ${server.graphqlPath}`));

/*app.use('/graphql',graphqlHTTP({
    schema,
    //el resolver se pasa como root value
    
    graphiql:true

}));
app.listen(8000, ()=> console.log('el servidor is working'));*/