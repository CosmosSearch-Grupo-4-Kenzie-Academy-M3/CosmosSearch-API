import { Router } from "express";

import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const users = Router()
users.post("", middlewares.validateSchema(schemas.users.request), middlewares.verifyUserEmail, controllers.userCreate);
users.get("", controllers.userRead);
users.patch("", controllers.userUpdate);
users.delete("", controllers.userDelete);
users.post("/login", middlewares.validateSchema(schemas.users.login), middlewares.verifyCredentials, controllers.userLogin);

export default users