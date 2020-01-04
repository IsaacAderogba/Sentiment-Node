import jwt from "jsonwebtoken";

export const generateToken = ({
  id,
  firstName,
  lastName
}: {
  id: number;
  firstName: string;
  lastName: string;
}) => {
  const payload = {
    userId: id,
    firstName,
    lastName
  };

  const options = {
    expiresIn: "14d"
  };

  return jwt.sign(payload, process.env.JWT_SECRET || "secret", options);
};
