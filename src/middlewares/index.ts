import post from "./posts";
import shared from "./shared";
import user from "./users";

const middlewares = {
  ...shared,
  ...user,
  ...post,
};

export default middlewares;
