import mongoose, { Schema } from "mongoose";

const mySchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    text: String,
    date: Date
});

export const Model = mongoose.model('Messages', mySchema);