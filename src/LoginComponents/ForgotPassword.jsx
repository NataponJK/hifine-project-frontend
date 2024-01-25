import BackButton from "./Button/BackButton"
import LoginLayout from "./LoginLayout"

function ForgotPassword () {
    return (
        <LoginLayout>
            <div className="flex flex-col h-full">
                <div><BackButton /></div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="font-semibold mb-2">Forgot password</h2>
                    <p className="w-1/2 justify-items-start mb-2">E-mail address :</p>
                    <input type="email" name="email" className="mb-2 w-1/2 rounded-full px-5 py-1" placeholder="you@example.com"></input>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 m-2 w-1/2 rounded-full hover:ring hover:ring-orange-300">Confirm</button>
                </div>
            </div>
        </LoginLayout>
    )
}

export default ForgotPassword