import { Router } from "express";

import controllers from "../controllers";

const users = Router()
users.post("", controllers.userCreate)
users.get("", controllers.userRead)
users.patch("", controllers.userUpdate)
users.delete("", controllers.userDelete)
users.post("/login", controllers.userLogin)

export default users