function Card() {
  return (
    <>
      <div className="w-11/12 left-[4.1666665%] top-1/2 h-72 bg-transparent backdrop-blur-[20px] absolute rounded-md border-2 bg-gradient-to-r from-white/30 to-black/20 border-white flex justify-center items-center">
        <div className="">
          <div className="text-white">Hej, nazywam się Sebastian Niechciał</div>
          <div className="text-white">Jestem Front-End Developerem z doświadczeniem w branży</div>
          <div className="text-white">Wykorzystywane Technologie:</div>
          <ul className="text-white list-disc ml-5">
            <li>Angular</li>
            <li>React</li>
            <li>Ionic</li>
            <li>HTML + CSS + JS</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
