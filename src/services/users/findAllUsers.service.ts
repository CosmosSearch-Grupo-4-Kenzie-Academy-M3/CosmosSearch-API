import { User } from "../../entities/index";

import { TUserResponse } from "../../interfaces/users.interfaces";
import schemas from "../../schemas";
import repositories from "../../utils/respositorys";

const findAllUsers = async (): Promise<TUserResponse[]> => {
    const users: User[] = await repositories.user.find();

    const usersParsed: TUserResponse[] = users.map(user => schemas.users.response.parse(user))

    return usersParsed
}

export default findAllUsers