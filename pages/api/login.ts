import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const KEY = "2bc5f1234c2e063b4a1a4e4b21a01ab9b0b608833cca2f47f82451eb6b1d542d";

interface User {
  username: string;
  password: string;
  role: string;
}

const authUsers: User[] = [
  { username: "admin", password: "SavGroup9711;", role: "admin" },
  { username: "samsung", password: "SmsNG531$*", role: "admin" },
];

export const Login = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(reqUser, "prosto z requestu");
  // console.log(authUsers, "authusers");
  // console.log(authUsers.some(el => el.login === reqUser.login && el.password=== reqUser.password),"czy zawieara")
  // console.log(authUsers.some(el => ((el.password === reqUser.password) && (el.username === reqUser.username))),"czy zawieara")
  const reqUser: User = req.body;

  if (
    authUsers.some(
      (el) =>
        el.password === reqUser.password && el.username === reqUser.username
    )
  ) {
    console.log("jest w srodku");
    console.log(req.body);

    const jwtBody = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["samsungadmin", "admin"],
        "x-hasura-default-role": "admin",
      },
    };

    const token = jwt.sign(jwtBody, KEY, {
      algorithm: "HS256",
      expiresIn: 60 * 60 * 24,
    });
    console.log(token);

    return res.json({ token: token });
  } else {
    console.log("nie ma go w srodku!!!!!!!!");
    res.statusCode = 400;
  }
  res.end();
};

export default Login;

// const FnStringRtn = (arg: string): string => {
//     return 0;
// }
