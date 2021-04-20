import express from 'express';
const app = express();
import { crearRouterApi } from '../routes/routerApi.js';
import { crearRouterForm } from '../routes/routerForm.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', crearRouterApi());
app.use('/home', crearRouterForm());
app.use(express.static('public'))

app.get('*', (req, res) =>{
    res.status(404).send('Página no encontrada😪');
});

export default app;