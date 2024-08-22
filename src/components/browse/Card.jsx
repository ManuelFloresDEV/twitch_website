function ButtonBrowser(props) {
  return (
    <div className="flex mb-2 items-center rounded-md h-12 border-solid border-4 border-black  bg-violet-800 hover:bg-violet-700 w-64 p-2">
      <p className="font-semibold text-2xl">{props.text}</p>
      <img className="ms-auto" src={props.image} alt="" />
    </div>
  );
}

export default ButtonBrowser;
