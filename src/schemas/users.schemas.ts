import { z } from "zod";

const user = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  createdAt: z.string(),
  uptedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const request = user.omit({
  id: true,
  createdAt: true,
  uptedAt: true,
  deletedAt: true,
});

const response = user.omit({ password: true });

const responseArray = response.array();

const users = {
  user,
  request,
  response,
  responseArray,
};

export default users;
