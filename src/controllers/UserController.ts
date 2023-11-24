import { FastifyReply, FastifyRequest } from 'fastify';
import { UserModel } from '../models/User';
import { UpdateQuery } from 'mongoose';
import { IUser } from '../types/user';

class UserController {
  async createUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const user = await UserModel.create(request.body);
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async getUsers(_: FastifyRequest, reply: FastifyReply) {
    try {
      const users = await UserModel.find();
      reply.send(users);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async getUserById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserModel.findById(request.params.id);
      if (!user) {
        reply.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async updateUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        request.params.id,
        request.body as UpdateQuery<IUser>,
        { new: true }
      );

      if (!user) {
        reply.status(404).send({ message: 'Usuário não encontrado' });
        return;
      }
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  }

  async deleteUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    try {
      const user = await UserModel.findByIdAndDelete(request.params.id);
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
