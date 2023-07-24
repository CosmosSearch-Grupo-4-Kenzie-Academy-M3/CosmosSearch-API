import { User } from "../../entities/index";

import { TUserResponse } from "../../interfaces/users.interfaces";
import schemas from "../../schemas";
import repositories from "../../utils/respositorys";

const findById = async (userId: number): Promise<TUserResponse> => {
    console.log("-----------------------------")
    console.log(userId)
    console.log("-----------------------------")
    const user: User | null | undefined = await repositories.user.findOneBy({
        id: userId
    })

    const userParsed: TUserResponse = schemas.users.response.parse(user!)

    return userParsed
}

export default findById