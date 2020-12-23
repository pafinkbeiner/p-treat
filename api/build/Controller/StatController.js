"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
var Site_1 = __importDefault(require("../models/Site"));
var getCategories = function (req, res) {
    var site = Site_1.default.find(function (err, sites) {
        if (err) {
            res.send(err);
        }
        else {
            var categories_1 = new Array();
            sites.map(function (site) {
                if (categories_1.find(function (item) { return item == site.category; }) == undefined)
                    categories_1.push(site.category);
            });
            res.json(categories_1);
        }
    });
};
exports.getCategories = getCategories;
