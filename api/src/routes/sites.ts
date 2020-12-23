import * as express from "express";
import * as SiteController from "../Controller/SiteController"
import * as StatController from "../Controller/StatController"
import { allowAdmin } from "../Helper/AuthHandler";

const router = express.Router();

/* POST Sites */

router.get("/add", SiteController.addSiteForm);

router.post("/add", SiteController.addSite);

/* GET Sites */

router.get("/", SiteController.allSites);

router.get("/byId/:id", SiteController.getSiteById);

router.get("/byCategory/:category", SiteController.getSitesByCategory);

/* GET Categories */

router.get("/categories" , StatController.getCategories);


export default router;