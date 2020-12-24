import * as express from "express";
import * as InteractController from "../Controller/InteractController"


const router = express.Router();

router.get("/like/:siteId", InteractController.performLike);

router.get("/dislike/:siteId", InteractController.performDislike);


export default router;