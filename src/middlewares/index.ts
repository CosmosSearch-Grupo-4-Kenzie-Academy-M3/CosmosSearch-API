import { handleError } from "./handlerErrors.middlewares"
import validateSchema from "./validateSchema.middleware"

const middlewares = {
    handleError,
    validateSchema
}

export default middlewares