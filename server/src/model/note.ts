import {InferSchemaType, model, Schema } from "mongoose";
import user from "./user";


const noteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,required:true},
    title: {type:String, required:true},
    text: {type:String},
    image: {type:String, required:true},
    campus:{enum : ["CHANDIGARH UNI","CGC-L","CGC-J","CHITKARA UNI","PU","QUEST","others"]},
    place:{type:String},

},{timestamps:true});

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note",noteSchema);
