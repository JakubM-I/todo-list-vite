import { IconContext } from "react-icons";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";


const TasksList = () => {
    return (
        <ul>
            <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-doneButton flex justify-center items-center text-[#fff] text-[20px]">
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 1
                    </div>
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-removeButton flex justify-center items-center text-[20px]">
                    <BiTrash />
                </button>
            </li>
            <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-doneButton flex justify-center items-center  text-[#fff] text-[20px]">
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 2
                    </div>
                <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-removeButton flex justify-center items-center text-[20px]">
                    <BiTrash />
                </button>
            </li>
        </ul>
    )
};

export default TasksList;