import { Request, Response, NextFunction } from "express";

import repositories from "../../utils/respositorys";

const verifyPostId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const id = Number(req.params.id);

  const postFind = await repositories.post.findOneBy({
    id: id,
  });

  if (!postFind) return res.status(404).json({ message: "Post not Found!" });

  next();
};

export default verifyPostId;
