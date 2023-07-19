import { z } from "zod";

import schemas from "../schemas";
import { DeepPartial } from "typeorm";

type TComment = z.infer<typeof schemas.comments.comment>;

type TCommentResponse = z.infer<typeof schemas.comments.comment>;

type TCommentRequest = z.infer<typeof schemas.comments.request>;

type TCommentUpdate = DeepPartial<TCommentRequest>;

export { TComment, TCommentRequest, TCommentResponse, TCommentUpdate };
