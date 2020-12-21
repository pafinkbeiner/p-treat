import * as express from "express";
import * as InteractController from "../Controller/InteractController"


const router = express.Router();

router.get("/like", InteractController.performLike);


export default router;