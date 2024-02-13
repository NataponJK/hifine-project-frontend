import { useEffect, useRef, useState } from "react";
import DropdownEdit from "./DropdownEdit";

const SelectEditButton = ({ editPost, deletePost }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dropEdit = useRef(null);

  function handleEditDropdown(e) {
    if (!e.target.closest(`.${dropEdit.current.className}`) && openEdit) {
      setOpenEdit(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleEditDropdown);
    return () => {
      document.removeEventListener("click", handleEditDropdown);
    };
  }, [openEdit]);

  return (
    <div
      className="editdrop"
      ref={dropEdit}
      style={{
        width: "auto",
        display: "inline",
      }}
    >
      <button
        className="bg-blue-200 rounded-lg flex items-center"
        onClick={() => setOpenEdit((openEdit) => !openEdit)}
      >
        <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
          more_vert
        </span>
      </button>
      {openEdit && (
        <DropdownEdit
          editPost={editPost}
          deletePost={deletePost}
          setOpenEdit={setOpenEdit}
        />
      )}
    </div>
  );
};

export default SelectEditButton;
