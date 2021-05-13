import Joi from 'joi';

const createVehicleSchema = Joi.object({
    externalCode: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
    category: Joi.string(),
    dailyValue: Joi.number(),
    image: Joi.string(),
    year: Joi.string(),
    conservation: Joi.string(),
    fuel: Joi.string(),
    rentedBy: Joi.string(),
});

const updateVehicleSchema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
    category: Joi.string(),
    dailyValue: Joi.number(),
    image: Joi.string(),
    year: Joi.string(),
    conservation: Joi.string(),
    fuel: Joi.string(),
    rentedBy: Joi.string(),
});

export {
    createVehicleSchema,
    updateVehicleSchema,
};
