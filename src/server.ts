import 'dotenv/config';
import fastify from 'fastify';
import connectDB from './config/db';
import routes from './routes';

const app = fastify();

const start = async () => {
  try {
    await connectDB();
    await app.listen({
      port: 3200
    });
    console.log('Servidor rodando em http://localhost:3200/');
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
};

routes(app);

start();
