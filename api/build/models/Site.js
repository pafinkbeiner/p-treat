"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var SiteSchema = new mongoose_1.Schema({
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
    categorie: {
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
    review: {
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
var Site = mongoose_1.default.model("Site", SiteSchema);
exports.default = Site;
