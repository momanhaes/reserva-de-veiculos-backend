import { v4 as uuidv4 } from "uuid";
import { Vehicle, FindOptions } from "./vehicle.typings";
import VehicleModel from "./vehicle.model";
import VehicleError from "./vehicle.error";

export default {
  generateId(): string {
    return uuidv4();
  },

  async create(vehicle: Vehicle): Promise<Vehicle | never> {
    try {
      return (await VehicleModel.create(vehicle)) as unknown as Vehicle;
    } catch (err) {
      if (err.code === 11000)
        throw new VehicleError(
          `ExternalCode ${vehicle.externalCode} já em uso`,
          400
        );

      throw err;
    }
  },

  async findByExternalCode(externalCode: string): Promise<Vehicle | never> {
    return VehicleModel.findOne({ externalCode }).lean() as unknown as Vehicle;
  },

  async find(options: FindOptions): Promise<Vehicle[] | never> {
    const filter = options.keyword ? buildKeywordFilter(options.keyword) : {};
    return VehicleModel.find({ ...filter }).lean() as unknown as Vehicle[];
  },

  async update(vehicle: Vehicle): Promise<Vehicle | never> {
    await VehicleModel.updateOne({ _id: vehicle._id }, vehicle);
    return VehicleModel.findById(vehicle._id).lean() as unknown as Vehicle;
  },

  async delete(externalCode: string): Promise<void | never> {
    await VehicleModel.deleteOne({ externalCode });
  },
};

function buildKeywordFilter(keyword: string): object {
  const caseInsensitiveKeywordRegex = new RegExp(keyword, "i");

  return {
    $or: [
      { externalCode: keyword },
      { name: caseInsensitiveKeywordRegex },
      { description: caseInsensitiveKeywordRegex },
      { category: caseInsensitiveKeywordRegex },
      { year: caseInsensitiveKeywordRegex },
      { conservation: caseInsensitiveKeywordRegex },
    ],
  };
}
