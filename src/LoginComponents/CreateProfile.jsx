import LoginLayout from "./LoginLayout"

function CreateProfile() {
    return (
        <LoginLayout>
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="font-semibold mb-2">Profile</h2>
                    <img src="https://scontent.fbkk19-1.fna.fbcdn.net/v/t1.6435-9/93607305_140163044216634_3704572587456593920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGMd3CuvDSRf37cGBLGNLfDo8EbbqhTbe-jwRtuqFNt7-J-2TPBAic2h_Lkdg8SDwmqRmEncCiRCrLS_Piih96k&_nc_ohc=qJs2JAoNATYAX8Kk0Av&_nc_ht=scontent.fbkk19-1.fna&oh=00_AfClSo8-nM0VkwDBXTD2MSeNbMEs10tMXxz8xkhC4UTKQw&oe=65C5A685" width="300px" alt="" />
                <p className="w-1/2 justify-items-start mb-2">Display :</p>
                <input className="mb-2 w-1/2 rounded-full px-5 py-1" placeholder="Display name"></input>
                <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 m-2 w-1/2 rounded-full hover:ring hover:ring-orange-300">Confirm</button>
            </div>
        </LoginLayout>
    )
}

export default CreateProfile