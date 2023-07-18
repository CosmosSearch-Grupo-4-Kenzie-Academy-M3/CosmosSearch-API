import { z } from "zod";

import schemas from "../schemas";

type TPost = z.infer<typeof schemas.posts.post>;

type TPostRequest = z.infer<typeof schemas.posts.request>;

export { TPost, TPostRequest };
