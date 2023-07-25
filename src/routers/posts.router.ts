import { Router } from "express";

import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const posts = Router();

posts.get("", controllers.postReadAll);

posts.use(middlewares.verifyToken);

posts.post(
  "",
  middlewares.validateSchema(schemas.posts.request),
  controllers.postCreate
);

posts.patch("", controllers.postUpdate);
posts.delete("", controllers.postDelete);

export default posts;
