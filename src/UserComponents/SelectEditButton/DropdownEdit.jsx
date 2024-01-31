const liCSS =
  "p-3 border text-gray-700 hover:text-white hover:bg-indigo-700 cursor-pointer bg-white";

const DropdownEdit = ({setOpenEdit}) => {
  return (
    <div className="shadow h-auto text-nowrap absolute">
      <ul className="text-left">
        <li className={liCSS} onClick={() => setOpenEdit(false)}>
          Edit
        </li>
        <li className={liCSS} onClick={() => setOpenEdit(false)}>
          Delete
        </li>
      </ul>
    </div>
  );
};

export default DropdownEdit;
