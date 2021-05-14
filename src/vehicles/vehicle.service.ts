import { Vehicle, FindOptions } from "./vehicle.typings";
import VehicleRepository from "./vehicle.repository";

export default {
  async create(vehicle: Vehicle): Promise<Vehicle | never> {
    const vehicleId = VehicleRepository.generateId();

    return VehicleRepository.create({ ...vehicle, _id: vehicleId });
  },

  async find(options: FindOptions): Promise<Vehicle[] | never> {
    return VehicleRepository.find(options);
  },

  async findByExternalCode(externalCode: string): Promise<Vehicle | never> {
    return VehicleRepository.findByExternalCode(externalCode);
  },

  async updateVehicle(
    oldVehicle: Vehicle,
    vehicle: Vehicle
  ): Promise<Vehicle | never> {
    const { _id } = oldVehicle;
    const updatedVehicle = { ...oldVehicle, ...vehicle, _id };
    return VehicleRepository.update(updatedVehicle);
  },

  async delete(externalCode: string): Promise<void | never> {
    await VehicleRepository.delete(externalCode);
  },
};
