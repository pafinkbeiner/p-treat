"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = (function (db) {
    console.log("Try to connect to Database...");
    var connect = function () {
        mongoose_1.default
            .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () {
            return console.log("Successfully connected to Database");
        })
            .catch(function (error) {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
});
