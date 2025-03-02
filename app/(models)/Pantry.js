import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const PantrySchema = new Schema({
    title: String,
    description: String,
    quantity: Number,
    freshness: Number
});

const Pantry = mongoose.models.Pantry || mongoose.model('Pantry', PantrySchema);
export default Pantry;