import { z } from "zod";

import schemas from "../schemas";

type TComment = z.infer<typeof schemas.comments.comment>;

type TCommentRequest = z.infer<typeof schemas.comments.request>;

export { TComment, TCommentRequest };
