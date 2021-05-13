import { Request, Response, NextFunction } from 'express';
import { updateVehicleSchema, createVehicleSchema } from './vehicle.schemas';

export default {
    async validateCreateVehiclesPayload(req: Request, res: Response, next: NextFunction) {
        try {
            await createVehicleSchema.validateAsync(req.body, { stripUnknown: true });

            next();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async validateUpdateVehiclesPayload(req: Request, res: Response, next: NextFunction) {
        try {
            await updateVehicleSchema.validateAsync(req.body, { stripUnknown: true });

            next();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
}
