import verifyCredentials from "./verifyCredentials.middleware";
import verifyToken from "./verifyToken.middleware";
import verifyUserEmail from "./verifyUserEmail.middleware";
import verifyUserId from "./verifyUserId.middleware";
import verifyUserIdToken from "./verifyUserIdToken.middleware";

const user = {
    verifyCredentials,
    verifyToken,
    verifyUserEmail,
    verifyUserId,
    verifyUserIdToken
}

export default user;