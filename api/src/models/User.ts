import mongoose, {Schema, Document} from "mongoose";

export interface UserInterface extends Document{
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    lastLogin: string;
    role: number;
    liked: string[];
    disliked: string[];
}

const UserSchema: Schema = new Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        required: false,
        default: Date.now()
    },
    role: {
        type: Number,
        required: false,
        default: 0
    },
    liked: {
        type: Array,
        required: false,
        default: []
    },
    disliked: {
        type: Array,
        required: false,
        default: []
    }
});


const User = mongoose.model<UserInterface>("User", UserSchema);

export default User;


