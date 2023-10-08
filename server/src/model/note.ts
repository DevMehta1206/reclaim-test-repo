import {InferSchemaType, model, Schema } from "mongoose";
import user from "./user";


const noteSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,required:true},
    title: {type:String, required:true},
    text: {type:String},
    image: {type:String, required:true},
    campus:{type:String},
    place:{type:String},
<<<<<<< HEAD
    tag:{type:String, required:true},
=======
    tag:{type:String},
>>>>>>> 2475eb62a7d080cdf34313b5a53c59f16e99bbe3

},{timestamps:true});

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note",noteSchema);
