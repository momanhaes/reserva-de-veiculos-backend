import { Mongoose, connect, disconnect } from "mongoose";
import { IConnectionProvider } from "../typings";

export default class implements IConnectionProvider {
  private static _instance: IConnectionProvider;
  private connection: Mongoose;

  static getInstance(): IConnectionProvider {
    if (!this._instance) this._instance = new this();

    return this._instance;
  }

  async connect(): Promise<void | never> {
    if (!this.connection) {
      this.connection = await connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }
  }

  async disconnect(): Promise<void | never> {
    await disconnect();
  }
}
