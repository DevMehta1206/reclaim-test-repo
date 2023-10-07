import {InferSchemaType, model, Schema } from "mongoose";
import user from "./user";


const noteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,required:true},
    title: {type:String, required:true},
    text: {type:String},
    image: {type:String, required:true},
    campus:{type:String},
    place:{type:String},
    tag:{type:String},

},{timestamps:true});

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note",noteSchema);
