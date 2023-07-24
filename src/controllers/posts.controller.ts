import { Request, Response } from "express";

import { TPostRequest, TPostResponse, TPostUpdate } from "../interfaces/posts.interfaces";

const postCreate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const postRead = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const postUpdate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const postDelete = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const posts = {
    postCreate,
    postRead,
    postUpdate,
    postDelete
};

export default posts;