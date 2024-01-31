import { useEffect, useRef, useState } from "react";
import DropdownActivity from "./DropdownActivity";

const SelectActivityButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const drop = useRef(null);
  function handleOpenDropdown(e) {
    if (!e.target.closest(`.${drop.current.className}`) && openDropdown) {
      setOpenDropdown(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleOpenDropdown);
    return () => {
      document.removeEventListener("click", handleOpenDropdown);
    };
  }, [openDropdown]);

  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        margin: "16px",
        width: "auto",
        display: "inline-block",
      }}
    >
      <button
        className="bg-blue-200 rounded-lg p-3"
        onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}
      >
        Select Activity
      </button>
      {openDropdown && <DropdownActivity setOpenDropdown={setOpenDropdown} />}
    </div>
  );
};

export default SelectActivityButton;
