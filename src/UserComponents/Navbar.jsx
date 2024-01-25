import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div>
      <div className="h-[56px] flex items-center bg-zinc-800  border-b-[1px] border-zinc-500 px-2">
        <div className="w-[75px]">
          <img alt="logo" />
        </div>
        <nav className="ml-auto mr-auto w-full sm:w-[640px] h-full">
          <Navigation />
        </nav>
        <div className="w-[75px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
