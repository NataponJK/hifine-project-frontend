import BackButton from "./Button/BackButton";
import ForgotPasswordButton from "./Button/ForgotPasswordButton";
import LoginLayout from "./LoginLayout";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <LoginLayout>
      <div className="flex flex-col h-full">
        <div>
          <BackButton />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="font-semibold mb-2">Sign in to HiFine</h2>
          <p className="w-1/2 justify-items-start mb-2">E-mail address :</p>
          <input
            type="email"
            name="email"
            className="mb-2 w-1/2 rounded-full px-5 py-1"
            placeholder="you@example.com"
          ></input>
          <p className="w-1/2 justify-items-start mb-2">Password :</p>
          <input
            type="password"
            name="password"
            className="mb-2 w-1/2 rounded-full px-5 py-1"
            placeholder="*********"
          ></input>
          <Link to="/Signup" className="flex flex-col items-center w-full">
            <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 m-2 w-1/2 rounded-full hover:ring hover:ring-orange-300">
              Sign up
            </button>
          </Link>
          <ForgotPasswordButton />
        </div>
      </div>
    </LoginLayout>
  );
}

export default Signin;
