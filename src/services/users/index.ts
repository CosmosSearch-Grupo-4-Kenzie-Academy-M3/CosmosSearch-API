import createUser from "./createUser.service";
import login from "./loginUser.service";
import findAllUsers from "./findAllUsers.service";
import findById from "./findUserById.service";

const usersServices = {
    createUser,
    login,
    findAllUsers,
    findById
}

export default usersServices;