const liCSS =
  "flex p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer bg-white";

const DropdownActivity = ({ setOpenDropdown, setSelectedActivity }) => {
  return (
    <div className="shadow h-auto text-nowrap absolute z-10">
      <ul className="text-left">
      <li className={liCSS} onClick={() => { setSelectedActivity({ symbol: 'directions_walk.png', text: "Walking" }); setOpenDropdown(false); }}>
      <img src='directions_walk.png' />Walking
        </li>
        <li className={liCSS} onClick={() => { setSelectedActivity({ symbol: "directions_run.png", text: "Running" }); setOpenDropdown(false); }}>
        <img src='directions_run.png' />Running
        </li>
        <li className={liCSS} onClick={() => { setSelectedActivity({ symbol: "directions_bike.png", text: "Cycling" }); setOpenDropdown(false); }}>
        <img src='directions_bike.png' />Cycling
        </li>
        <li className={liCSS} onClick={() => { setSelectedActivity({ symbol: "hiking.png", text: "Hiking" }); setOpenDropdown(false); }}>
        <img src='hiking.png' />Hiking
        </li>
        <li className={liCSS} onClick={() => { setSelectedActivity({ symbol: "skateboarding.png", text: "Skateboarding" }); setOpenDropdown(false); }}>
          <img src='skateboarding.png' />Skateboarding
        </li>
      </ul>
    </div>
  );
};

export default DropdownActivity;
