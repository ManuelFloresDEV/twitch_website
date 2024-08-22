import Icon from "./Icon";

const iconSvg = [
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        <path
          fill-rule="evenodd"
          d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        <path
          fill-rule="evenodd"
          d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        <path
          fill-rule="evenodd"
          d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
        ></path>
      </svg>
    ),
  },
  {
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
        <path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path>
        <path
          fill-rule="evenodd"
          d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
];

function NavBar() {
  return (
    <nav className="fixed w-full flex justify-center bg-zinc-800 h-10 ">
      <div className="flex gap-4 items-center  mr-auto ms-3">
        <img
          className="size-7 hover:animate-bounce"
          src="https://pngimg.com/uploads/twitch/twitch_PNG28.png"
          alt=""
        />
        <span className="font-semibold text-1xl hover:text-fuchsia-300">
          Following
        </span>
        <span className="font-semibold text-1xl hover:text-fuchsia-300">
          Browse
        </span>
        <Icon
          svg=<svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
          </svg>
        />
      </div>
      <div className="w-1/4	my-auto">
        <div className="flex border rounded-lg items-center border-slate-500 mx-auto hover:border-slate-400">
          <span className="text-lg text-slate-500 hover:text-slate-400  ">
            search
          </span>
          <span className=" ms-auto bg-zinc-700 p-1 rounded-r-lg hover:bg-zinc-600">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="gray">
              <g>
                <path
                  fill-rule="evenodd"
                  d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
                  clip-rule="evenodd"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 ms-auto mr-3">
        {iconSvg.map((icon, index) => {
          return <Icon key={index} svg={icon.svg} />;
        })}
        <img
          className="rounded-full size-7 "
          src="https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-70x70.png"
          alt=""
        />
      </div>
    </nav>
  );
}

export default NavBar;
