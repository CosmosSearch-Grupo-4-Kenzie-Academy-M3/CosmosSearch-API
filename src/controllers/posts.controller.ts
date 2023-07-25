import { Request, Response } from "express";

import postsServices from "../services/posts";

const postCreate = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(res.locals.userId);
  const postData = req.body;

  const newPost = await postsServices.createPost(postData, userId);

  return res.json(newPost);
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
  postDelete,
};

export default posts;
