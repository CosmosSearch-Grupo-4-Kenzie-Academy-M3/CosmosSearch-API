import { z } from "zod";

const post = z.object({
    id: z.number(),
    title: z.string(),
    topic: z.string(),
    text: z.string(),
    createdAt: z.string(),
    uptedAt: z.string(),
    deletedAt: z.string().nullish()        
})

const request = post.omit({
    id: true,
    createdAt: true,
    uptedAt: true,
    deletedAt: true    
})

const responseArray = post.array()

const posts = {
    post,
    request,
    responseArray
}

export default posts