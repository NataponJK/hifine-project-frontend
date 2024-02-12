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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
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
              <div className="flex gap-3">
                <div className="flex gap-3">
                  <p>Time</p>
                  <input type="text" placeholder="Time" />
                </div>
                <div className="flex gap-3">
                  <p>Distance</p>
                  <input type="text" placeholder="Distance" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="flex justify-between">
              <div class="flex items-center gap-5">
                <p>Add Picture to Your Post</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    viewBox="0 -960 960 960"
                    width="40"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z" />
                  </svg>
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
