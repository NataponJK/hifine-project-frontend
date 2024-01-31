import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex justify-evenly h-full">
      <li className="flex w-1/3 bg-zinc-600 hover:bg-zinc-900">
        <Link to="/Home" className="flex justify-center w-full">
          <button className="flex justify-center items-center w-full rounded">
            <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
              Home
            </span>
          </button>
        </Link>
      </li>
      <li className="flex w-1/3 bg-zinc-300 hover:bg-zinc-900">
        <Link to="/Profile" className="flex justify-center w-full">
          <button className="flex justify-center items-center w-full rounded">
            <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
              Account_circle
            </span>
          </button>
        </Link>
      </li>
      <li className="flex w-1/3 bg-zinc-600 hover:bg-zinc-900">
        <Link to="/Lists" className="flex justify-center w-full">
          <button className="flex justify-center items-center w-full rounded">
            <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
              Format_list_bulleted
            </span>
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
