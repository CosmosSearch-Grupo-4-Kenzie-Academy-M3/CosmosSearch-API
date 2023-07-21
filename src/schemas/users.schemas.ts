import { z } from "zod";

const user = z.object({
  id: z.number(),
  email: z.string().email(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const request = user.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const response = user.omit({ password: true });

const responseArray = response.array();

const login = z.object({
  email: z.string().email(),
  password: z.string(),
})

const token = z.object({
  id: z.string()
})

const users = {
  user,
  request,
  response,
  responseArray,
  login,
  token
};

export default users;
