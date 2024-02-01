import { useEffect, useState } from "react";
import UserLayout from "./UserComponents/UserLayout";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("Link/User");
      setUser(response.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getMedia = async () => {
      const response = await axios.get("Link/UserID/Media");
      setMedia(response.data);
    };
    getMedia();
  }, []);

  return (
    <UserLayout>
      <div className="flex flex-col sm:w-[640px] w-screen ml-auto mr-auto justify-center items-center rounded-lg bg-red-400 mt-2">
        <div className="w-[250px] h-[250px] mt-10 mb-10 bg-pink-600 rounded-full">
          <img />
          <p>{user.displayName}</p>
        </div>
        <div className="flex flex-wrap w-fit justify-center items-center">
          {media.map((image) => {
            return <img className="w-1/3" alt="image" key={image.id} />;
          })}
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;
