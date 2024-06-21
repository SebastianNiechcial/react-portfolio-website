import './menu.css'
import { MdWork } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";

function Menu() {
    return (
        <>
            <div className='w-full h-8 bg-black'>
                <div className='display: flex justify-end mr-3 space-x-4'>
                    <button className='display: flex place-items-center h-8'>
                        <MdWork className='text-white'></MdWork>
                        <p className=' text-white'>Projects</p>
                    </button>
                    <button className='display: flex place-items-center h-8'>
                        <IoDocumentTextSharp className='text-white '></IoDocumentTextSharp>
                        <p className=' text-white'>CV</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Menu;