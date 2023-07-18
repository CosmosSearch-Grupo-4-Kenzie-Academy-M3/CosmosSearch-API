import { z } from "zod";

import schemas from "../schemas";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof schemas.users.user>;

type TUserRequest = z.infer<typeof schemas.users.request>;

type TUserResponse = z.infer<typeof schemas.users.response>;

type TUserUpdate = DeepPartial<TUserRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
