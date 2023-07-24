import { User } from "../../entities"
import schemas from "../../schemas"
import repositories from "../../utils/respositorys"
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces"

const updateUser = async (userId: number, data: TUserUpdate) => {
    const user: User | null = await repositories.user.findOneBy({
        id: userId
    })

    const userNewData = schemas.users.request.parse({
        ...user,
        ...data
    })

    const userPatched: User = await repositories.user.save(userNewData)
    const userResponse: TUserResponse = schemas.users.response.parse(userPatched)

    return userResponse
}

export default updateUser