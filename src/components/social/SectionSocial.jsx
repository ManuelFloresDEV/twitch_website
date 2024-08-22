import Icon from "../navbar/Icon";
import CardSocial from "./CardSocial";

const social = [
  {
    name: "ElMariana",
    playing: "Minecraft",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0107210e-a98c-409d-92a6-1caf70bb3953-profile_image-70x70.png",
  },
  {
    name: "shroud",
    playing: "counter strike",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png",
  },
  {
    name: "Flats",
    playing: "Overwatch 2",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/6f398651-334b-4cfc-a37c-29c066584da8-profile_image-70x70.png",
  },
  {
    name: "Khalamity",
    playing: "Just Chatting",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/71f325c4-82e6-4e0d-ad42-7c318a1b1494-profile_image-70x70.png",
  },
  {
    name: "ESLCS",
    playing: "counter strike",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c1ecbcd5-b8b6-4e0c-9d5f-e01d610aa97d-profile_image-70x70.png",
  },
];

const socialRecommended = [
  {
    name: "KaiCenat",
    playing: "Minecraft",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/1d8cd548-04fa-49fb-bfcd-f222f73482b6-profile_image-70x70.png",
  },
  {
    name: "ElMariana",
    playing: "Minecraft",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0107210e-a98c-409d-92a6-1caf70bb3953-profile_image-70x70.png",
  },
  {
    name: "shroud",
    playing: "counter strike",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png",
  },
  {
    name: "Gladd",
    plating: "Grand Theft Auto V",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9b4dc7ba-03d3-44d7-ab09-8528f7c8fc3b-profile_image-70x70.png",
  },
  {
    name: "Flats",
    playing: "Overwatch 2",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/6f398651-334b-4cfc-a37c-29c066584da8-profile_image-70x70.png",
  },
  {
    name: "ALKAPONE",
    playing: "Black Myth: Wukong",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/ab76403b-c87c-4439-b46b-b6cd0c07a663-profile_image-70x70.png",
  },
  {
    name: "Khalamity",
    playing: "Just Chatting",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/71f325c4-82e6-4e0d-ad42-7c318a1b1494-profile_image-70x70.png",
  },
  {
    name: "ESLCS",
    playing: "counter strike",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c1ecbcd5-b8b6-4e0c-9d5f-e01d610aa97d-profile_image-70x70.png",
  },
];

function SectionSocial() {
  return (
    <aside className="fixed top-[40px] lg:w-[15rem] w-[44px]  h-screen bg-zinc-800 p-2 ">
      <div className="lg:flex hidden   ">
        <p className="text-lg font-semibold py-1">For You</p>
        <span className="ms-auto">
          <Icon
            svg=<svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <g>
                <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
              </g>
            </svg>
          />
        </span>
      </div>
      <div className="lg:flex hidden">
        <p className=" text-sm font-semibold text-zinc-500 py-2">
          FOLLOWED CHANNELS
        </p>
        <span className="ms-auto">
          <Icon
            svg=<svg width="20" height="20" viewBox="0 0 20 20" fill="gray">
              <path d="M11 6 7 2 3 6l1.5 1.5L6 6v6h2V6l1.5 1.5L11 6Zm6 8-4 4-4-4 1.5-1.5L12 14V8h2v6l1.5-1.5L17 14Z"></path>
            </svg>
          />
        </span>
      </div>
      {social.map((item, index) => {
        return (
          <CardSocial
            key={index}
            image={item.image}
            nikName={item.name}
            game={item.playing}
          />
        );
      })}
      <p className=" lg:flex hidden  text-sm font-semibold pt-4 pb-2">
        RECOMMENDED CHANNELS
      </p>
      {socialRecommended.map((items, index) => {
        return (
          <CardSocial
            key={index}
            image={items.image}
            nikName={items.name}
            game={items.playing}
          />
        );
      })}
    </aside>
  );
}

export default SectionSocial;
