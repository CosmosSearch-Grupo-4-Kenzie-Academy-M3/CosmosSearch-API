import { Router } from "express";

import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const posts = Router();

posts.get("", controllers.postReadAll);

posts.use(middlewares.verifyToken);

posts.get("/profile", controllers.postReadByToken);

posts.post(
  "",
  middlewares.validateSchema(schemas.posts.request),
  controllers.postCreate
);
posts.patch("/:id", middlewares.verifyPostId, controllers.postUpdate);

posts.delete("/:id", middlewares.verifyPostId, controllers.postDelete);

export default posts;
