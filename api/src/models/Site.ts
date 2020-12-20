import mongoose, {Schema, Document} from "mongoose";

export interface SiteInterface extends Document{
    name: string;
    subname: string;
    category: string;
    thumbs: string[];
    description: string;
    rating: {
        like: number;
        disklike: number;
    }
    score: number;
    keywords: string[];
    review:string;
    clicks: number;
    exclusive: boolean;
    meta: {
        updated: Date;
        uploaded: Date;
    }
}

const SiteSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Website Name"
    },
    subname: {
        type: String,
        required: false,
        default: ""
    },
    category: {
        type: String,
        required: true,
        default: "free"
    },
    thumbs: {
        type: Array,
        required: false,
        default: ["https://dummyimage.com/640x360/fff/aaa"]
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    rating: {
        like: {
            type: Number,
            required: false,
            default: 0
        },
        disklike: {
            type: Number,
            required: false,
            default: 0
        },
    },
    score: {
        type: Number,
        required: true,
        default: 0
    },
    keywords: {
        type: Array,
        required: false,
        default: ["website"]
    },
    review:{
        type: String,
        required: true,
        default: ""
    },
    clicks: {
        type: Number,
        required: false,
        default: 0
    },
    exclusive: {
        type: Boolean,
        required: false,
        default: 0
    },
    meta: {
        updated: {
            type: Date,
            required: true,
            default: Date.now()
        },
        uploaded: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
});


const Site = mongoose.model<SiteInterface>("Site", SiteSchema);

export default Site;


