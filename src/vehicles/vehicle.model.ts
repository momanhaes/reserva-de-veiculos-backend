import { model, Schema } from 'mongoose';

const VehicleModel = model('Vehicle', new Schema({
    _id: String,
    externalCode: { type: String, unique: true },
    name: String,
    description: String,
    status: String,
    category: String,
    dailyValue: Number,
    imageUrl: String,
    year: String,
    conservation: String,
    fuel: String,
    rentedBy: String,
}, {
    versionKey: false,
    timestamps: {}
}), 'vehicle');

export default VehicleModel;
