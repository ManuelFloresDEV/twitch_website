import Icon from "../navbar/Icon";
import BtnCategory from "./BtnCategory";

function CardMain(props) {
  const random = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;
  return (
    <article className=" w-48">
      <img className="w-full" src={props.image} alt="" />
      <div className="flex items-center">
        <h5 className="text-sm font-bold">{props.title}</h5>
        <span className="ms-auto">
          <Icon
            svg=<svg width="15" height="15" viewBox="0 0 20 20" fill="white">
              <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
            </svg>
          />
        </span>
      </div>
      <p className="text-sm text-gray-400">{random}K viewers</p>
      <div className="">
        <BtnCategory category={props.cat} />
      </div>
    </article>
  );
}

export default CardMain;
