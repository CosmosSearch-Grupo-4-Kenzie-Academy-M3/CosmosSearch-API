import express, { json } from 'express';
import "reflect-metadata"
import "express-async-errors"

import routes from './routers';
import middlewares from './middlewares';

const app = express()
app.use(json())

app.use("/users", routes.users)
app.use("/posts", routes.posts)
app.use("/likes", routes.likes)
app.use("/comments", routes.comments)

app.use(middlewares.handleError)

export default app