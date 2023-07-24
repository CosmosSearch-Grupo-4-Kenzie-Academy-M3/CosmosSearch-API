import createUser from "./createUser.service";
import login from "./loginUser.service";
import findAllUsers from "./findAllUsers.service";

const usersServices = {
    createUser,
    login,
    findAllUsers,
}

export default usersServices;