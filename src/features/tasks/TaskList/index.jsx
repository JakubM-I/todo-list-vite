import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import priority1 from "../../../assets/priority-1-icon.png";
import priority2 from "../../../assets/priority-2-icon.png"


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
                <div className="flex gap-[5px]">
                    <span className="size-buttons flex justify-center items-center"><img src={priority1} alt="" /></span>
                    <button className="shrink-0 border border-solid border-borderGray w-buttons h-buttons bg-removeButton flex justify-center items-center text-[20px]">
                        <BiTrash />
                    </button>
                </div>

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