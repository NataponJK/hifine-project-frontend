import { useEffect, useState } from "react";
import UserLayout from "./UserComponents/UserLayout";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState('');

//  useEffect this for get userData with Token

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('URL_TO_YOUR_JSON_ENDPOINT');
        const imageDataFromJson = response.data.imageData; // Change this according to your JSON structure
        const base64Image = Buffer.from(imageDataFromJson, 'binary').toString('base64');
        const imageUrl = `data:image/jpeg;base64,${base64Image}`; // Change the mime type if necessary
        setImageData(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }

    fetchImage();
  }, []);

  return (
    <UserLayout>
      <div className="flex flex-col sm:w-[640px] w-screen ml-auto mr-auto justify-center items-center rounded-lg bg-red-400 mt-2">
        <div className="w-[250px] h-[250px] mt-10 mb-10 bg-pink-600 rounded-full">
          <img src={user.ProfileImage} alt="User Profile" />
          <p>{user.displayName}</p>
        </div>
        <div className="flex flex-wrap w-fit justify-center items-center">
          {/* {media.map((image) => {
            return <img className="w-1/3" alt="image" key={image.id} />;
          })} */}
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
