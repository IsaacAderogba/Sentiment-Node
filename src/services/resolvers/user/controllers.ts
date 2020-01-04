import UserModel from "./models";
import bcrypt from "bcryptjs";
import { generateToken } from "./helpers";
import { UserInputType } from "./types";

const registerUser = async (user: UserInputType) => {
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  const userId = await UserModel.insertUser(user);

  if (userId) {
    let userDetails = await UserModel.findUserByFilter({ id: userId });
    return {
      userId: userDetails.id.toString(),
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      token: generateToken(userDetails)
    };
  }
};

const loginUser = async (user: UserInputType) => {
  const { email, password } = user;
  let userDetails = await UserModel.findUserByFilter({ email });

  if (userDetails && bcrypt.compareSync(password, userDetails.password)) {
    return {
      userId: userDetails.id.toString(),
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      token: generateToken(userDetails)
    };
  }
  return null;
};

export default {
  registerUser,
  loginUser
};
