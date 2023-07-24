import { Router } from "express";

import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const users = Router()
users.post("", middlewares.validateSchema(schemas.users.request), middlewares.verifyUserEmail, controllers.userCreate);
users.get("", controllers.userReadAll);

users.post("/login", middlewares.validateSchema(schemas.users.login), middlewares.verifyCredentials, controllers.userLogin);

users.use(middlewares.verifyToken)
users.get("/profile", controllers.userReadProfile);
users.get("/:id", middlewares.verifyUserId , controllers.userReadById);
users.patch("/:id", middlewares.verifyUserId, controllers.userUpdateById);
users.patch("/profile/update", controllers.userUpdateProfile);
users.delete("/:id", middlewares.verifyUserId, controllers.userDelete);

export default users