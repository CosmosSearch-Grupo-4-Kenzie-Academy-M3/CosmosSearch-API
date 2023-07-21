import { sign } from "jsonwebtoken";

import { TToken } from "../../interfaces/users.interfaces";

interface TTokenObject {
    token: string
}

const login = (data: TToken): TTokenObject => {

    const token = sign(
        {}, 
        String(process.env.SECRET_KEY),
        {expiresIn: "24h", subject: String(data.id)}
    )
    
    const tokenObject: TTokenObject = {
        "token": token
    }

    return tokenObject;
}

export default login;