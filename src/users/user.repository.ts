import { v4 as uuidv4 } from "uuid";
import { User } from "./user.typings";
import UserModel from "./user.model";

export default {
  generateId(): string {
    return uuidv4();
  },

  async existsByEmail(email: string): Promise<boolean | never> {
    return UserModel.exists({ email });
  },

  async create(user: User): Promise<User | never> {
    return UserModel.create(user) as unknown as User;
  },

  async findByEmail(email: string): Promise<User | never> {
    return UserModel.findOne({ email }).select("+password") as unknown as User;
  },
};
