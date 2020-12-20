"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSite = exports.addSiteForm = exports.getSite = exports.allSites = void 0;
var Site_1 = __importDefault(require("../models/Site"));
exports.allSites = function (req, res) {
    var sites = Site_1.default.find(function (err, sites) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(sites);
        }
    });
};
exports.getSite = function (req, res) {
    var sites = Site_1.default.findOne({ name: req.params.name }, function (err, site) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(site);
        }
    });
};
exports.addSiteForm = function (req, res) {
    res.redirect("/index.html");
};
exports.addSite = function (req, res) {
    if (true) {
        var site = new Site_1.default({
            name: req.body.name,
            subname: req.body.subname,
            categorie: req.body.categorie,
            thumbs: req.body.thumbs,
            description: req.body.description,
            score: req.body.score,
            keywords: req.body.keywords,
            review: req.body.review,
            exclusive: req.body.exclusive,
            meta: {
                updated: req.body.updated,
                uploaded: req.body.uploaded,
            },
            rating: {
                like: req.body.like,
                disklike: req.body.disklike,
            }
        });
        site.save()
            .then(function (result) { return res.send(result); })
            .catch(function (err) { return res.send(err); });
    }
    else {
        res.json({ succ: 0 });
    }
};
