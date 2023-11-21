import { FastifyReply, FastifyRequest } from 'fastify';
import { UserModel } from '../models/user';
class UserController {
  async createUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await UserModel.create(request.body);
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async getUsers(_, reply: FastifyReply) {
    try {
      const users = await UserModel.find();
      reply.send(users);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async getUserById(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await UserModel.findById(request.id);
      if (!user) {
        reply.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async updateUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await UserModel.findByIdAndUpdate(request.id, request.body, {
        new: true
      });
      if (!user) {
        reply.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async deleteUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await UserModel.findByIdAndDelete(request.id);
      if (!user) {
        reply.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }
}

export default new UserController();
