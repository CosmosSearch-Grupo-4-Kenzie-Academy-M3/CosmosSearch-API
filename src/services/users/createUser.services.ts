import { User } from "../../entities";

import {TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import schemas from "../../schemas";
import repositories from "../../utils/respositorys";

const createUser = async (data: TUserRequest): Promise<TUserResponse> => {
    const newUser: User = repositories.user.create(data);
    await repositories.user.save(newUser);

    const userResponse: TUserResponse = schemas.users.response.parse(newUser);

    return userResponse;
}

export default createUser;