// import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
// import { endpoints } from "../apis";

// const { SIGNUP_API } = endpoints;

export async function signUp(userData) {
  try {
    const response = await apiConnector(
      "POST",
      "http://localhost:4000/auth/signup",
      userData
    );
    // console.log("SIGNUP API RESPONSE............", response);
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
  }
}
