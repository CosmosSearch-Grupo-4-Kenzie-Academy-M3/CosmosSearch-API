import { User } from "../../entities/index";

import { TUserResponse } from "../../interfaces/users.interfaces";
import schemas from "../../schemas";
import repositories from "../../utils/respositorys";

const findUserById = async (userId: number): Promise<TUserResponse> => {
    const user: User | null | undefined = await repositories.user.findOneBy({
        id: userId
    })

    const userParsed: TUserResponse = schemas.users.response.parse(user!)

    return userParsed
}

export default findUserById