// Schema-> Note: id, userid, title,content, dateadded
import mongoose from "mongoose";
const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    //bacha
    userid: {
        type:String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
    },
    dateAdded: {
        type: Date,
        default : Date.now, 
    }  

});

const Note = mongoose.model("Note", noteSchema);
export default Note;