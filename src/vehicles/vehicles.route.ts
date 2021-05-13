import { Router } from 'express';
import vehicleController from './vehicle.controller';
import vehicleMiddlewares from './vehicle.middlewares';

const router = Router();

router.post('/', vehicleMiddlewares.validateCreateVehiclesPayload, vehicleController.create);
router.get('/', vehicleController.findAll);
router.get('/:externalCode', vehicleController.findByExternalCode);
router.patch('/:externalCode', vehicleMiddlewares.validateUpdateVehiclesPayload, vehicleController.updateVehicleByExternalCode);
router.delete('/:externalCode', vehicleController.deleteByExternalCode);

export default router;
