import { Request, Response } from 'express';
import UserService from './user.service';
import { LoginInfo, UserInfo } from './user.typings';

export default {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const userInfo = <UserInfo> req.body;
            const user = await UserService.create(userInfo);

            return res.status(201).json(user);
        } catch (err) {
            console.error('Erro na criação de usuário:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const loginInfo = <LoginInfo> req.body;
            const user = await UserService.login(loginInfo);

            return res.status(200).json(user);
        } catch (err) {
            console.error('Erro ao realizar login de usuário:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    }
}
