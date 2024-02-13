import { useEffect, useState } from "react";
import PostCard from "./UserComponents/PostCard";
import PostModal from "./UserComponents/PostModal";
import UserLayout from "./UserComponents/UserLayout";
import axios from "axios";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  const activities = [
    { value: "walking", symbol: "directions_walk.png", text: "Walking" },
    { value: "running", symbol: "directions_run.png", text: "Running" },
    { value: "cycling", symbol: "directions_bike.png", text: "Cycling" },
    { value: "hiking", symbol: "hiking.png", text: "Hiking" },
    { value: "skateboarding", symbol: "skateboarding.png", text: "Skateboarding" }
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("Link");
        setPosts(response.data.posts); // Assuming response.data has a property "posts"
        setUser(response.data.user); // Assuming response.data has a property "user"
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [reload]);

  const editPost = async (postId, updatedData, imageFile) => {
    try {
      // Convert image file to base64
      const imageBase64 = await convertImageToBase64(imageFile);

      // Append the base64 image to updatedData
      updatedData.media = imageBase64;

      const response = await axios.put(`Link/${postId}`, updatedData);
      if (response.status === 200) {
        setReload(!reload);
      }
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`Link/${postId}`);
      if (response.status === 200) {
        setReload(!reload);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <UserLayout>
      <div className="flex justify-center sm:w-[640px] mx-auto border-2 border-black rounded-xl mt-2">
        <button
          className="w-full h-full"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          This is Modal Button
        </button>
      </div>
      {openModal && <PostModal setOpenModal={setOpenModal} activities={activities}/>}
      {/* {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              description={post.description}
              distance={post.distance}
              duration={post.duration}
              activityType={post.activityType}
              editPost={editPost}
              deletePost={deletePost}
              activities={activities}
            />
          ))}
        </div>
      )} */}
    </UserLayout>
  );
}

export default Home;
