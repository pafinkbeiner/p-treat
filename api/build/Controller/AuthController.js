"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.allUsers = void 0;
var User_1 = __importDefault(require("../models/User"));
exports.allUsers = function (req, res) {
    var sites = User_1.default.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(sites);
        }
    });
};
exports.getUser = function (req, res) {
    var users = User_1.default.findOne({ name: req.params.name }, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
