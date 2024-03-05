// import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/authSlice";

const { SIGNUP_API, LOGIN_API } = endpoints;

export async function signUp(userSignUpData) {
  try {
    const response = await apiConnector("POST", SIGNUP_API, userSignUpData);
    // console.log("SIGNUP API RESPONSE............", response);
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
  }
}

export function useLoginConnector() {
  const dispatch = useDispatch();

  const loginConnector = async (userLoginData) => {
    try {
      const response = await apiConnector("POST", LOGIN_API, userLoginData);
      
      dispatch(setToken(response.data.token));

      // Log the current state of the Redux store
      // console.log("Redux State after setting token:", dispatch.getState().auth);


      localStorage.setItem("token", JSON.stringify(response.data.token));
      console.log("Token set in local storage:", response.data.token);


      return response;
      // console.log("LOGIN API RESPONSE............", response);
    } catch (error) {
      console.log("LOGIN API ERROR............", error.response.data.message);
      return error.response;
    }
  };

  return loginConnector;
}
