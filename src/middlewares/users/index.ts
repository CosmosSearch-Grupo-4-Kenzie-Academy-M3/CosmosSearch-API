import verifyCredentials from "./verifyCredentials.middleware";
import verifyToken from "./verifyToken.middleware";
import verifyUserEmail from "./verifyUserEmail.middleware";
import verifyUserId from "./verifyUserId.middleware";

const user = {
    verifyCredentials,
    verifyToken,
    verifyUserEmail,
    verifyUserId
}

export default user;