// import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, LOGIN_API } = endpoints;

export async function signUp(userSignUpData) {
  try {
    const response = await apiConnector("POST", SIGNUP_API, userSignUpData);
    // console.log("SIGNUP API RESPONSE............", response);
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
  }
}

export async function loginConnector(userLoginData) {
  try {
    const response = await apiConnector("POST", LOGIN_API, userLoginData);
    return response;
    // console.log("LOGIN API RESPONSE............", response);
  } catch (error) {
    console.log("LOGIN API ERROR............", error.response.data.message);
    return error.response;
  }
}
