import { Request, Response } from "express";

import { TToken, TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import usersServices from "../services/users";

const userLogin = (req: Request, res: Response): Response => {
    const userId = res.locals.userId
    
    const token = usersServices.login({id: userId})
    return res.status(200).json(token)
};

const userCreate = async (req: Request, res: Response): Promise<Response> => {
    const newUserData = req.body;

    const newUser: TUserResponse = await usersServices.createUser(newUserData);
    return res.status(201).json(newUser);
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
    userLogin,
    userCreate,
    userRead,
    userUpdate,
    userDelete
};

export default users;