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
var express = __importStar(require("express"));
var SiteController = __importStar(require("../Controller/SiteController"));
var StatController = __importStar(require("../Controller/StatController"));
var router = express.Router();
/* POST Sites */
router.get("/add", SiteController.addSiteForm);
router.post("/add", SiteController.addSite);
/* GET Sites */
router.get("/", SiteController.allSites);
router.get("/byId/:id", SiteController.getSiteById);
router.get("/byCategory/:category", SiteController.getSitesByCategory);
/* GET Categories */
router.get("/categories", StatController.getCategories);
exports.default = router;
