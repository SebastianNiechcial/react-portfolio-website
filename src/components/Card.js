function Card({ children }) {
  return (
    <>
      <div className="w-11/12 left-[4.1666665%] top-1/2 h-72 bg-transparent backdrop-blur-[20px] absolute rounded-md border-2 bg-gradient-to-r from-white/30 to-black/20 border-white flex justify-center items-center">
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Card;
