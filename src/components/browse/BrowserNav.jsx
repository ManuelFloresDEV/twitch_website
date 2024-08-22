import Card from "./Card";

const cardBrowse = [
  {
    text: "Games",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
  },
  {
    text: "IRL",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
  },
  {
    text: "Music & DJs",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
  },
  {
    text: "Creative",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
  },
  {
    text: "Esports",
    image: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg  ",
  },
];

function BrowserNav() {
  return (
    <nav className="p-8 mt-16">
      <p className="font-bold pb-8 text-5xl">Browse</p>

      <div className="flex flex-wrap ">
        {cardBrowse.map((card, index) => {
          return <Card key={index} text={card.text} image={card.image} />;
        })}
      </div>
    </nav>
  );
}

export default BrowserNav;
