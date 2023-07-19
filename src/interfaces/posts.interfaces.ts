import { z } from "zod";

import schemas from "../schemas";
import { DeepPartial } from "typeorm";

type TPost = z.infer<typeof schemas.posts.post>;

type TPostResponse = z.infer<typeof schemas.posts.post>;

type TPostRequest = z.infer<typeof schemas.posts.request>;

type TPostUpdate = DeepPartial<TPostRequest>;

export { TPost, TPostRequest, TPostResponse, TPostUpdate };
