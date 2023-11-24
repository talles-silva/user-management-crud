import mongoose, { Schema } from 'mongoose';

// Definindo um schema para o endereço
const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  number: { type: Number, required: true },
  complement: { type: String }
});

// Definindo um schema para o usuário
const UserSchema = new Schema({
  name: { type: String },
  cpf: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: AddressSchema },
  role: { type: String, enum: ['admin', 'client'], required: true }
});

// Modelo para o usuário
const UserModel = mongoose.model<User>('User', UserSchema);

interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
  number: number;
  complement?: string;
}

interface User extends Document {
  name?: string;
  cpf?: string;
  email: string;
  address?: Address;
  role: 'admin' | 'cliente';
}

export { UserModel };
