import LoginLayout from "./LoginLayout";
import BackButton from "./Button/BackButton";
import ConfirmSignUpButton from "./Button/ConfirmSignupButton";
import SignInButton from "./Button/SignInButton";

function SignUpPage() {
  return (
    <LoginLayout>
      <div className="flex flex-col h-full">
        <div>
          <BackButton />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="font-bold mb-2">Create your account</h2>
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
          <p className="w-1/2 justify-items-start mb-2">Confirm Password :</p>
          <input
            type="password"
            name="password"
            className="mb-2 w-1/2 rounded-full px-5 py-1"
            placeholder="*********"
          ></input>
          <div className="flex flex-col w-full justify-center">
          <ConfirmSignUpButton />
          <p>Already have account</p>
          <SignInButton />
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}

export default SignUpPage;
