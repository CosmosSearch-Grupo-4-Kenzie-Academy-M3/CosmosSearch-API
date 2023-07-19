import { handleError } from "./handlerErrors.middlewares"
import validateSchema from "./validateSchema.middleware"

const shared = {
    handleError,
    validateSchema
}

export default shared