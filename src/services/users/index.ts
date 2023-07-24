import createUser from "./createUser.service";
import login from "./loginUser.service";
import findAllUsers from "./findAllUsers.service";
import findUserById from "./findUserById.service";
import updateUser from "./updateUser.service";
import deleteUser from "./deleteUser.service";

const usersServices = {
    createUser,
    login,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}

export default usersServices;