import { z } from "zod";

const comment = z.object({
    id: z.number(),
    text: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()          
})

const request = comment.omit({
    id: true as never,
    createdAt: true as never,
    updatedAt: true as never,
    deletedAt: true as never
})
const responseArray = comment.array()

const comments = {
    comment,
    request,
    responseArray
}

export default comments