import SelectEditButton from "./SelectEditButton/SelectEditButtton";

const PostCard = () => {
  return (
    <div className="flex flex-col sm:w-[640px] w-screen h- mx-auto mt-2 bg-zinc-400 rounded-lg pt-2">
      <div className="flex bg-zince-800 text-white justify-between align-baseline px-2">
        <div className="flex bg-pink-200 gap-5 items-center">
          <img alt="user icon" />
          <p>Display Name</p>
        </div>
        <div className="flex bg-green-200 gap-5 items-center">
          <img alt="activity icon" />
          <SelectEditButton />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full h-[600px] bg-amber-500">
          <img />
        </div>
      </div>
      <div className="flex flex-col justify-center px-2 bg-lime-300">
        <div className="flex items-center">
          <div className="flex flex-col bg-orange-500 w-3/5 p-2">
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolores distinctio placeat praesentium voluptatum earum iure a,
              officia similique debitis quos temporibus. Voluptatum, repudiandae
              alias vitae nostrum animi maxime eveniet!
            </p>
          </div>
          <div className="flex justify-center w-2/5">
            <div className="flex items-end bg-green-600 w-1/2 p-2">
              <p className="text-5xl">10</p>
              <p>km</p>
            </div>
            <div className="flex items-end bg-pink-500 w-1/2 p-2">
              <p className="text-5xl">1:00</p>
              <p>hr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
