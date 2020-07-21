import { Router } from 'express';
import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMidleware from './app/midlewares/auth';

//const { Router } = require('express');

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMidleware);
routes.put('/users', UserController.update);

//routes.post('/users', UserController.store);

/*routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);


routes.put('/users', UserController.update);*/

/*routes.get('/', async(req, res) => {
    const user = await User.create({
        name: 'Luikson Silva',
        email: 'teste@hotmail.com',
        password_hash: '55942420BDCCSA'
    });

    return res.json(user);
    //return res.json({ message: 'Teste!'});
});*/

//module.exports = routes;
export default routes;