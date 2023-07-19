import { Router } from "express";

import controllers from "../controllers";

const posts = Router()
posts.post("", controllers.postCreate)
posts.get("", controllers.postRead)
posts.patch("", controllers.postUpdate)
posts.delete("", controllers.postDelete)

export default posts