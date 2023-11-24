interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: number;
  number: number;
  complement?: string;
}

interface IUser {
  name?: string;
  cpf?: string;
  email: string;
  address?: IAddress;
  role: 'admin' | 'cliente';
}

export { IUser, IAddress };
