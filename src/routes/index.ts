import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import userRoutes from './userRoutes';

const routes = async (app: FastifyInstance) => {
  app.get('/', async (_: FastifyRequest, reply: FastifyReply) => {
    reply.send({ status: 'Connected' });
  });
  await userRoutes(app);
};

export default routes;
