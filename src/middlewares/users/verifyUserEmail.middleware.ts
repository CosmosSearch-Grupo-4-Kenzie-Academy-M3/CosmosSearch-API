import { Request, Response, NextFunction } from "express"

import repositories from "../../utils/respositorys";

const verifyUserEmail = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    const { email } = req.body;

    const userFind = await repositories.user.findOneBy({
        email: email
    })

    if (userFind) return res.status(409).json({message: "Email already in use"})

    next();
}

export default verifyUserEmail;