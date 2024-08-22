import CardMain from "./CardMain";

const games = [
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
    title: "just Chatting",
    category: ["IRL"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/519291_IGDB-285x380.jpg",
    title: "Black Myth",
    category: ["RPG", "Adventure Game"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
    title: "Minecraft",
    category: ["Simulation"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/1469308723-285x380.jpg",
    title: "Software and Game",
    category: ["Simulation", "Creative"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/509659-285x380.jpg",
    title: "ASMR",
    category: ["IRL"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg",
    title: "World of Warcraft",
    category: ["RPG", "Adventure Game"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
    title: "Apex Legends",
    category: ["FPS", "Shooter"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
    title: "Dota 2",
    category: ["Strategy", "MOBA"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/493057-285x380.jpg",
    title: "PUBG",
    category: ["FPS", "Shooter"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    title: "Call of Duty",
    category: ["FPS", "Shooter"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB-285x380.jpg",
    title: "Escape from Tarkov",
    category: ["FPS", "Shooter", "RPG"],
  },
  {
    image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    title: "League of Legends",
    category: ["RPG", "Strategy"],
  },
];

function SectionMain() {
  return (
    <div className="mx-9 ">
      <div className="pb-6">
        <span className="font-bold text-2xl pr-5 hover:text-fuchsia-300">
          Categories
        </span>
        <span className="font-bold text-2xl hover:text-fuchsia-300">
          Live Channels
        </span>
      </div>
      <div className="flex items-center pb-6">
        <div className="flex border rounded-lg items-center w-60 border-slate-500 hover:border-slate-400">
          <span className="span-1 rounded-r-lg ">
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
          <span className="text-lg text-slate-500">search Category Tags</span>
        </div>
        <div className="flex gap-2 ms-auto  ">
          <strong>Sort By</strong>
          <div className="px-1 border text-sm h-full border-slate-500 hover:border-slate-400">
            <span>Recommended For You </span>
          </div>
        </div>
      </div>
      <main className="flex gap-3 flex-wrap ">
        {games.map((game, index) => {
          return (
            <CardMain
              key={index}
              image={game.image}
              title={game.title}
              cat={game.category}
            />
          );
        })}
      </main>
    </div>
  );
}

export default SectionMain;
