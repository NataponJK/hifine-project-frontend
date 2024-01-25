import { Link } from "react-router-dom"

const ForgotPasswordButton = () => {
    return (
        <Link to="/ForgotPassword">
        <button className="bg-gray-800 hover:bg-gray-900 text-white p-1 w-40 rounded-full hover:ring hover:ring-gray-500">
            Forget password?
        </button>
    </Link>
    )
}

export default ForgotPasswordButton