import { Router } from "express";

import controllers from "../controllers";

const likes = Router()
likes.post("", controllers.likeCreate)
likes.get("", controllers.likeRead)
likes.delete("", controllers.likeDelete)

export default likes