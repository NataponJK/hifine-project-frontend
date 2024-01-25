const ListsModal = ({ setOpenModal }) => {
    return (
      <div className="flex fixed top-0 left-0 w-full h-dvh justify-center items-center sm:mx-auto z-10 backdrop-blur-md">
        <div className="flex flex-col sm:w-[640px] mx-auto bg-white opacity-100">
          <div className="flex justify-between mx-2 text-center">
            <h2>Add Lists</h2>
            <button onClick={() => setOpenModal(false)}>close</button>
          </div>
          <div className="modalBody">
            <p>for add input</p>
            <p>for add input</p>
            <p>for add input</p>
            <p>for add input</p>
          </div>
          <div className="modalFooter">
            <div className="flex">
            </div>
            <div>
              <button>Add List</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListsModal;
  