import shared from "./shared"
import user from "./users"

const middlewares = {
    ...shared,
    ...user
}

export default middlewares