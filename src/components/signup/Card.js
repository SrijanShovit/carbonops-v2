const Card = ({ children }) => {
  return (
    <>
      <div className="text-black">
        <div className="w-[20rem] rounded-md">{children}</div>
      </div>
    </>
  );
};

export default Card;
