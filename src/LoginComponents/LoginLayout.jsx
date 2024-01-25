import PropTypes from "prop-types";
import AnimationComponent from "./TypeAnimation";

function LoginLayout({ children }) {
  return (
    <div className="flex w-full h-full bg-zinc-300">
      <div className="p-10 w-3/5 h-screen font-bold text-5xl bg-zinc-400 items-center hidden sm:flex">
        {/* <h1>Welcome to HiFine</h1> */}
        <AnimationComponent />
      </div>
      <div className="w-full sm:w-2/5 h-screen p-5 mx-auto">{children}</div>
    </div>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
