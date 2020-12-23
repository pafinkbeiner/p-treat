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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var AuthHandler = __importStar(require("../Helper/AuthHandler"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json("pTREAT API");
        return [2 /*return*/];
    });
}); });
router.post("/login", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.body.email != undefined && req.body.password != undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, AuthHandler.login(req.body.email, req.body.password)];
            case 1:
                result = _a.sent();
                if (result != undefined) {
                    res.json(result);
                    console.log("info that login of " + req.body.email + " was performed successfully!");
                }
                else {
                    res.status(400).json({ error: "Login Process was not successfull" });
                }
                return [3 /*break*/, 3];
            case 2:
                if (req.body.email == undefined)
                    res.status(400).json({ error: "email was not provided" });
                if (req.body.password == undefined)
                    res.status(400).json({ error: "Password was not provided" });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/register", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.body.username != undefined && req.body.password != undefined && req.body.email != undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, AuthHandler.register(req.body.username, req.body.password, req.body.email)];
            case 1:
                result = _a.sent();
                if (result != undefined) {
                    res.json(result);
                }
                else {
                    res.status(400).json({ error: "There is already a user with the provided credentials!" });
                }
                return [3 /*break*/, 3];
            case 2:
                if (req.body.username == undefined)
                    res.status(400).json({ error: "Username was not provided" });
                if (req.body.password == undefined)
                    res.status(400).json({ error: "Password was not provided" });
                if (req.body.email == undefined)
                    res.status(400).json({ error: "email was not provided" });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/decodeJWT", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var bearer, token;
    return __generator(this, function (_a) {
        bearer = req.headers["authorization"];
        if (bearer != undefined) {
            token = bearer.split(" ")[1];
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "", function (err, authData) {
                ;
                if (err) {
                    res.status(400).json({ error: "Verification was not successfull" });
                }
                else {
                    res.json(authData);
                }
            });
        }
        else {
            res.status(400).json({ error: "Bearer token was not provided" });
        }
        return [2 /*return*/];
    });
}); });
exports.default = router;
