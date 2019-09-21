import express from 'express';

import graphqlHTTP from 'express-graphql';
import {schema} from './database/schema';



const app=express();

app.get('/',(req, res) => {
     res.send('todo listo');
});



app.use('/graphql',graphqlHTTP({
    schema,
    //el resolver se pasa como root value
    
    graphiql:true

}));
app.listen(8000, ()=> console.log('el servidor is working'));