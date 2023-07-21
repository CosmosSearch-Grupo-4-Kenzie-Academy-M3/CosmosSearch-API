import verifyCredentials from "./verifyCredentials.middleware";
import verifyToken from "./verifyToken.middleware";
import verifyUserEmail from "./verifyUserEmail.middleware";

const user = {
    verifyCredentials,
    verifyToken,
    verifyUserEmail
}

export default user;