import { Request, Response } from "express";

import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";

const userCreate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const userRead = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const userUpdate = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
    return res.json("");
};

const users = {
    userCreate,
    userRead,
    userUpdate,
    userDelete
};

export default users;