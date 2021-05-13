import { Request, Response } from 'express';
import { Vehicle, FindOptions } from './vehicle.typings';
import VehicleService from './vehicle.service';

export default {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const vehicle = <Vehicle>req.body;
            const createdVehicle = await VehicleService.create(vehicle);

            return res.status(201).json(createdVehicle);
        } catch (err) {
            console.error('Erro na criação de veículo:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const queryParams: FindOptions = req.query;
            const vehicle = await VehicleService.find(queryParams);

            return res.status(200).json(vehicle);
        } catch (err) {
            console.error('Erro ao buscar lista de veículos:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },

    async findByExternalCode(req: Request, res: Response): Promise<Response> {
        try {
            const { externalCode } = req.params;
            const vehicle = await VehicleService.findByExternalCode(externalCode);

            if (!vehicle) return res.status(404).json({ error: `Vehicle ${externalCode} not found` });

            return res.status(200).json(vehicle);
        } catch (err) {
            console.error('Erro ao buscar veículo por externalCode:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },

    async updateVehicleByExternalCode(req: Request, res: Response): Promise<Response> {
        try {
            const { externalCode } = req.params;

            const vehicle = await VehicleService.findByExternalCode(externalCode);
            if (!vehicle) return res.status(404).json({ error: `Vehicle ${externalCode} not found` });

            const updatedVehicle = await VehicleService.updateVehicle(vehicle, req.body);

            return res.status(200).json(updatedVehicle);
        } catch (err) {
            console.error('Erro ao atualizar veículo:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },

    async deleteByExternalCode(req: Request, res: Response): Promise<Response> {
        try {
            const { externalCode } = req.params;

            await VehicleService.delete(externalCode);

            return res.status(204).json();
        } catch (err) {
            console.error('Erro ao deletar veículo:', err.message);
            return res.status(err.code || 500).json({ error: err.message });
        }
    },
}
