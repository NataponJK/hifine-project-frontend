const liCSS =
  "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer bg-white";

const DropdownActivity = ({ setOpenDropdown }) => {
  return (
    <div className="shadow h-auto text-nowrap absolute z-10">
      <ul className="text-left">
        <li className={liCSS} onClick={() => setOpenDropdown(false)}>
          <span class="material-symbols-rounded">directions_walk</span>Walking
        </li>
        <li className={liCSS} onClick={() => setOpenDropdown(false)}>
          <span class="material-symbols-rounded">directions_run</span>Running
        </li>
        <li className={liCSS} onClick={() => setOpenDropdown(false)}>
          <span class="material-symbols-rounded">Directions_bike</span>Cycling
        </li>
        <li className={liCSS} onClick={() => setOpenDropdown(false)}>
          <span class="material-symbols-rounded">Hiking</span>Hiking
        </li>
        <li className={liCSS} onClick={() => setOpenDropdown(false)}>
          <span class="material-symbols-rounded">Skateboarding</span>
          Skateboarding
        </li>
      </ul>
    </div>
  );
};

export default DropdownActivity;
