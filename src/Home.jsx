import { useEffect, useState } from "react";
import PostCard from "./UserComponents/PostCard";
import PostModal from "./UserComponents/PostModal";
import UserLayout from "./UserComponents/UserLayout";
import axios from "axios";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([])
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("Link");
      setUser(response.data);
    };
    getData();
  }, [reload]);

  const createPost = async (
    id,
    name,
    description,
    distance,
    duration,
    type
  ) => {
    const requestPost = {
      id: id,
      name: name,
      description: description,
      distance: distance,
      duration: duration,
      type: type,
    };
    const response = await axios.post("Link", requestPost);
    if (response.status === 200) {
      setReload(!reload);
    }
  };

  const editPost = async (id, name, description, distance, duration, type) => {
    const requestPost = {
      id: id,
      name: name,
      description: description,
      distance: distance,
      duration: duration,
      type: type,
    };
    const response = await axios.put("Link");
    if (response.status === 200) {
      setReload(!reload);
    }
  };

  const deletePost = async (id) => {
    const post_id = id;
    const response = await axios.delete("Link/${post_id}");
    if (response.status === 200) {
      setReload(!reload);
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
      {openModal && (
        <PostModal
          setOpenModal={setOpenModal}
          submitPost={createPost}
          submitEdit={editPost}
          submitDelete={deletePost}
        />
      )}
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            description={post.description}
            distance={post.distance}
            duration={post.duration}
            type={post.type}
          />
        ))}
      </div>
    </UserLayout>
  );
}

export default Home;
