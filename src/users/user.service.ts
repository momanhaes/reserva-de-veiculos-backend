import { User, UserInfo, LoginInfo } from "./user.typings";
import UserRepository from "./user.repository";
import UserError from "./user.error";

export default {
  async create(userInfo: UserInfo): Promise<User | never> {
    const isEmailUsed = await UserRepository.existsByEmail(userInfo.email);
    if (isEmailUsed) {
      throw new UserError(`Email ${userInfo.email} já está em uso.`, 400);
    }

    const userId = UserRepository.generateId();
    const user: User = { ...userInfo, _id: userId };

    return UserRepository.create(user);
  },

  async login({ email, password }: LoginInfo): Promise<User | never> {
    const defaultErrorMessage = "Login não autorizado.";

    const user = await UserRepository.findByEmail(email);
    if (!user) {
      console.error(`Usuário ${email} não encontrado.`);
      throw new UserError(defaultErrorMessage, 401);
    }

    if (user.password !== password) {
      console.error(`Senha inválida.`);
      throw new UserError(defaultErrorMessage, 401);
    }

    return user;
  },
};
