import { FastifyInstance } from 'fastify';
import UserController from '../controllers/UserController';

const userRoutes = async (app: FastifyInstance) => {
  app.post('/users', UserController.createUser);
  app.get('/users', UserController.getUsers);
  app.get('/users/:id', UserController.getUserById);
  app.put('/users/:id', UserController.updateUser);
  app.delete('/users/:id', UserController.deleteUser);
};

export default userRoutes;
