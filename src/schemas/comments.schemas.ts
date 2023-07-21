import { z } from "zod";

const comment = z.object({
    id: z.number(),
    text: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish()          
})

const request = comment.omit({
    id: true,
    createdAt: true,
    uptedAt: true,
    deletedAt: true    
})

const responseArray = comment.array()

const comments = {
    comment,
    request,
    responseArray
}

export default comments