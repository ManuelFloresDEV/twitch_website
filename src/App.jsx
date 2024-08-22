import NavBar from "./components/navbar/NavBar.jsx";
import BrowserNav from "./components/browse/BrowserNav.jsx";
import SectionSocial from "./components/social/SectionSocial.jsx";
import SectionMain from "./components/Main/SectionMain.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SectionSocial />
        <div className="lg:ms-56 ms-10">
          <BrowserNav />
          <SectionMain />
        </div>
      </div>
    </>
  );
}

export default App;
