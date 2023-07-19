import verifyCredentials from "./verifyCredentials.middleware";
import verifyToken from "./verifyToken.middleware";

const user = {
    verifyCredentials,
    verifyToken
}

export default user;