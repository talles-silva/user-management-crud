import 'dotenv/config';

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL || '');
    console.log('Conexão com o MongoDB estabelecida.');

    return mongoose.connection;
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB, VERIFICAR .env:', error);
    process.exit(1);
  }
};

export default connectDB;
