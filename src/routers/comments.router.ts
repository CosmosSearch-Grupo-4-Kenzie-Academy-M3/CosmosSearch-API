import { Router } from "express";

import controllers from "../controllers";

const comments = Router()
comments.post("", controllers.commentCreate)
comments.get("", controllers.commentRead)
comments.patch("", controllers.commentUpdate)
comments.delete("", controllers.commentDelete)

export default comments