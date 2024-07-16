import { authProps, loginProps} from "@/utils/types";
import axios from "axios";

export async function signUp(authProps: authProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        username: authProps.username,
        email: authProps.email,
        password: authProps.password
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function signIn(loginProps: loginProps) {
  console.log("hey");

  const url = `${process.env.NEXT_PUBLIC_URL}auth/signup`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: loginProps.email,
        password: loginProps.password
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}