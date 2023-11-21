import { FastifyInstance } from 'fastify';
import UserController from '../controllers/UserController';

const userRoutes = async (app: FastifyInstance) => {
  app.post('/users', UserController.createUser);
  app.get('/users', UserController.index);
  app.get('/users/:id', UserController.show);
  app.put('/users/:id', UserController.update);
  app.delete('/users/:id', UserController.delete);
};

export default userRoutes;
