import Joi from "joi";

const createVehicleSchema = Joi.object({
  externalCode: Joi.string().required(),
  name: Joi.string(),
  description: Joi.string(),
  status: Joi.string(),
  category: Joi.string(),
  dailyValue: Joi.number(),
  imageUrl: Joi.string().allow(""),
  year: Joi.string(),
  conservation: Joi.string(),
  fuel: Joi.string(),
  rentedBy: Joi.string().allow(null, ""),
});

const updateVehicleSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  status: Joi.string(),
  category: Joi.string(),
  dailyValue: Joi.number(),
  imageUrl: Joi.string().allow(null, ""),
  year: Joi.string(),
  conservation: Joi.string(),
  fuel: Joi.string(),
  rentedBy: Joi.string().allow(null, ""),
});

export { createVehicleSchema, updateVehicleSchema };
