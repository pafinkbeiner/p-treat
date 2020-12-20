import * as express from "express";
import * as SiteController from "../Controller/SiteController"

const router = express.Router();

/* POST Sites */

router.get("/add", SiteController.addSiteForm);

router.post("/add", SiteController.addSite);

/* GET Sites */

router.get("/", SiteController.allSites);

router.get("/:name", SiteController.getSite)

router.get("/byCategory/:category", SiteController.getSitesByCategory);

export default router;