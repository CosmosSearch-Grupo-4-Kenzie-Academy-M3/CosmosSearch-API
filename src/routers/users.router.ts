import { Router } from "express";

import controllers from "../controllers";

const users = Router()
users.post("/login",)
users.post("", controllers.userCreate)
users.get("", controllers.userRead)
users.patch("", controllers.userUpdate)
users.delete("", controllers.userDelete)

export default users