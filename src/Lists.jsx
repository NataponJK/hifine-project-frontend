import { useState } from "react";
import UserLayout from "./UserComponents/UserLayout";
import ListsModal from "./UserComponents/ListsModal";

const Lists = () => {
  const [openModal, setOpenModal] = useState(false);
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
      {openModal && <ListsModal setOpenModal={setOpenModal} />}
    </UserLayout>
  );
};

export default Lists;
