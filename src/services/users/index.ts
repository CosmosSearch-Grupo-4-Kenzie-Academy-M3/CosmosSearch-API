import createUser from "./createUser.service";
import login from "./loginUser.service";
import findAllUsers from "./findAllUsers.service";
import findById from "./findById.service";

const usersServices = {
    createUser,
    login,
    findAllUsers,
    findById
}

export default usersServices;