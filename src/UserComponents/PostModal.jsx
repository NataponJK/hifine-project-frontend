const PostModal = ({ setOpenModal }) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-dvh justify-center items-center sm:mx-auto z-10 backdrop-blur-md">
      <div className="flex flex-col sm:w-[640px] mx-auto bg-white opacity-100">
        <div className="flex justify-between mx-2 text-center">
          <h2>Create Post</h2>
          <button onClick={() => setOpenModal(false)}>close</button>
        </div>
        <div className="p-2 border-black">
          <textarea
            className="w-full h-[250px] p-3"
            placeholder="Share your exercise today"
          ></textarea>
        </div>
        <div className="modalFooter">
          <div className="flex">
            <p>Add to Your Post</p>
            <button>Add media</button>
            <select>
              <option>Walking</option>
              <option>Runnning</option>
              <option>Cycling</option>
              <option>Hiking</option>
              <option>Skateboarding</option>
            </select>
          </div>
          <div>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
