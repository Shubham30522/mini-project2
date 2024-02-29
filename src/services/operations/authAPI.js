import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API } = endpoints;

export async function signUp(
  name,
  email,
  bloodGroup,
  password,
  confirmPassword,
  // otp,
  // navigate
  accountType,
  gender,
  dateOfBirth,
  pincode,
  address
) {
  // const toastId = toast.loading("Loading...");
  console.log("reacher in signup function");
  try {
    const response = await apiConnector(
      "POST",
      "http://localhost:4000/auth/signup",
      {
        name,
        email,
        bloodGroup,
        password,
        confirmPassword,
        // otp,
        accountType,
        gender,
        dateOfBirth,
        pincode,
        address
      }
    );

    console.log("SIGNUP API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // toast.success("Signup Successful");
    // navigate("/login");
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
    // toast.error("Signup Failed");
    // navigate("/signup");
  }
  // toast.dismiss(toastId);
}
