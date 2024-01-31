const ListsModal = ({ setOpenModal }) => {
    return (
      <div className="flex fixed top-0 left-0 w-full h-dvh justify-center items-center sm:mx-auto z-10 backdrop-blur-md">
        <div className="flex flex-col sm:w-[640px] mx-auto bg-white opacity-100">
        <div className="flex justify-between mx-2 text-center items-center">
          <div className="w-[50px]"></div>
          <div>
            <h2>Create Post</h2>
          </div>
          <button onClick={() => setOpenModal(false)}>
            <span class="material-symbols-rounded" style={{ fontSize: 40, }}>
              close
            </span>
          </button>
        </div>
          <div className="modalBody">
          <textarea
            className="w-full h-[150px] p-3"
            placeholder="Add your to do list"
            ///value={description}
            maxLength="250"
          ></textarea>
          </div>
          <div className="modalFooter">
            <div className="flex">
            </div>
            <div className="flex justify-center">
            <button className="bg-orange-400 w-1/2 rounded-full p-2 m-2">
              Add Lists
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListsModal;
  