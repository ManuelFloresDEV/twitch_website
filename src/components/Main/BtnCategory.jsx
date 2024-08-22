function BtnCategory({ category }) {
  return (
    <>
      {category.map((cat, index) => (
        <button
          key={index}
          className="border-none m-1 bg-gray-800 hover:bg-gray-700 px-3 rounded-full"
        >
          {cat}
        </button>
      ))}
    </>
  );
}

export default BtnCategory;
