import { Request, Response, NextFunction } from "express";

import repositories from "../../utils/respositorys";

const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  let id = Number(req.params.id);

  if (!id) {
    id = Number(req.params.userId);
  }
  const userFind = await repositories.user.findOneBy({
    id: id,
  });

  if (!userFind) return res.status(404).json({ message: "User not Found!" });

  next();
};

export default verifyUserId;
