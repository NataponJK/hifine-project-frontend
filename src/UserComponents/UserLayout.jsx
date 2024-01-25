import Navbar from "./Navbar"

const UserLayout = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}

export default UserLayout