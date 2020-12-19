import * as express from "express";
import Site from "../models/Site"
import * as SiteController from "../Controller/SiteController"

const router = express.Router();

/* POST Sites */

router.get("/add", SiteController.addSiteForm);

router.post("/add", SiteController.addSite);

/* GET Sites */

router.get("/", SiteController.allSites);

router.get("/:name", SiteController.getSite)

export default router;