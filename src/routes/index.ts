import { FastifyInstance } from 'fastify';
import userRoutes from './userRoutes';

const routes = async (app: FastifyInstance) => {
  await userRoutes(app);
};

export default routes;
