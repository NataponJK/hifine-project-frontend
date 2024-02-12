import { useEffect, useRef, useState } from "react";
import DropdownActivity from "./DropdownActivity";
import { blacklist } from "validator";

const SelectActivityButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState({ symbol: '' , text: "Select Activity"});
  const drop = useRef(null);

  const handleOpenDropdown = (e) => {
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
        borderStyle: "solid",
        borderWidth: '3px',
        borderRadius: '8px',
      }}
    >
      <button
        className="flex rounded-lg items-center p-3"
        onClick={() => {
          setOpenDropdown((openDropdown) => !openDropdown);
        }}
      >
        {selectedActivity.symbol && <img src={selectedActivity.symbol} alt="Symbol" />} {selectedActivity.text}
      </button>
      {openDropdown && (
        <DropdownActivity
          setOpenDropdown={setOpenDropdown}
          setSelectedActivity={setSelectedActivity}
        />
      )}
    </div>
  );
};

export default SelectActivityButton;

