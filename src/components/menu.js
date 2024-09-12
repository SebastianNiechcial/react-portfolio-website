import { MdWork } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

function Menu() {
  return (
    <>
      <div className="display: flex absolute place-items-center w-full h-8 bg-transparent">
        <div className="text-white ml-3 w-11/12">Sebastian Niechciał</div>
        <div className="display: flex justify-end mr-3 space-x-4">
          <button className="display: flex place-items-center h-8">
            <MdWork className="text-white"></MdWork>
            <p className=" text-white">Projects</p>
          </button>
          <button className="display: flex place-items-center h-8">
            <IoDocumentTextSharp className="text-white "></IoDocumentTextSharp>
            <a href="../../public/CV.pdf" download className="text-white">
              CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
