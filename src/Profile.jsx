import UserLayout from "./UserComponents/UserLayout";

const Profile = () => {
  return (
    <UserLayout>
      <div className="flex flex-col sm:w-[640px] w-screen ml-auto mr-auto justify-center items-center rounded-lg bg-red-400 mt-2">
        <div className="w-[250px] h-[250px] mt-10 mb-10 bg-pink-600 rounded-full">
          <img />
        </div>
        <div className="flex flex-wrap w-fit justify-center items-center">
          {/* {media.map((image)=> {
            return (
              <img className="w-1/3" alt="image" key={image.id}/>
            )})
          } */}
          <img className="w-1/3 bg-black" alt="image"/>
          <img className="w-1/3 bg-white" alt="image"/>
          <img className="w-1/3 bg-black" alt="image"/>
          <img className="w-1/3 bg-white" alt="image"/>
          <img className="w-1/3 bg-black" alt="image"/>
          <img className="w-1/3 bg-white" alt="image"/>
          <img className="w-1/3 bg-black" alt="image"/>
          <img className="w-1/3 bg-white" alt="image"/>
          <img className="w-1/3 bg-black" alt="image"/>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;