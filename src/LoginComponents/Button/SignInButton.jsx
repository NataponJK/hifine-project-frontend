import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/SignIn" className="flex flex-col items-center w-full">
      <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 m-2 w-1/2 rounded-full hover:ring hover:ring-orange-300">
        Sign in
      </button>
    </Link>
  );
};

export default SignInButton;
