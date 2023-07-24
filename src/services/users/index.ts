import createUser from "./createUser.service";
import login from "./loginUser.service";
import findAllUsers from "./findAllUsers.service";
import findUserById from "./findUserById.service";
import updateUser from "./updateUser.service";

const usersServices = {
    createUser,
    login,
    findAllUsers,
    findUserById,
    updateUser
}

export default usersServices;