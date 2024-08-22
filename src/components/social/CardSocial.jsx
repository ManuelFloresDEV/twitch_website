import { useState } from "react";

function CardSocial(props) {
  const [isPresent, setIsPresent] = useState(true);
  const random = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;

  return (
    <div
      onClick={() => {
        setIsPresent(!isPresent);
      }}
      className="hover:bg-zinc-700 flex gap-3 items-center bg-zinc-800 py-1"
    >
      <img
        className={` ${
          isPresent ? "grayscale-0" : "grayscale"
        } size-7 rounded-full`}
        src={props.image}
        alt=""
      />
      <div className="lg:flex hidden flex-col ">
        <p className="text-md leading-4 text-white font-semibold">
          {props.nikName}
        </p>
        <p className="text-xs leading-4 text-zinc-400">{props.game}</p>
      </div>
      <span className=" lg:flex hidden  ms-auto">
        {isPresent ? `🔴${random}K` : "Offline"}
      </span>
    </div>
  );
}

export default CardSocial;
