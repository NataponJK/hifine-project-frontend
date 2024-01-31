import SelectActivityButton from "./SelectActivityButton/SelectActivityButton";

const PostModal = ({ setOpenModal }) => {

  return (
    <div className="flex fixed top-0 left-0 w-full h-dvh justify-center items-center sm:mx-auto backdrop-blur-md">
      <div className="flex flex-col sm:w-[640px] mx-auto bg-white rounded-lg p-3">
        <div className="flex justify-between mx-2 text-center items-center">
          <div className="w-[50px]"></div>
          <div>
            <h2>Create Post</h2>
          </div>
          <button onClick={() => setOpenModal(false)}>
            <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
              close
            </span>
          </button>
        </div>
        <div className="p-2 border-black">
          <textarea
            className="w-full h-[150px] p-3"
            placeholder="Share your exercise today"
            ///value={description}
            maxLength="250"
          ></textarea>
        </div>
        <div className="modalFooter">
          <div className="flex flex-col">
            <div className="flex">
              <div>
              <p>Time</p>
              <p>Distance</p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="flex justify-between">
            <div class="flex items-center gap-5">
              <p>Add to Your Post</p>
              <button>
                <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
                  image
                </span>
              </button>
            </div>
            <SelectActivityButton />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-orange-400 w-1/2 rounded-full p-2 m-2">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
