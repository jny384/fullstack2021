import mongoose from "mongoose";

const board = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
});

const boardSchema = mongoose.model('board', board)
export default boardSchema;