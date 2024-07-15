import { authProps} from "@/utils/types";
import axios from "axios";

export async function signUp(authProps: authProps) {
  console.log("hey");

  let url = `${process.env.NEXT_PUBLIC_URL}auth/signup`;

  let axiosConfig = {
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