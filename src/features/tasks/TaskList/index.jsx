import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";


const TasksList = () => {
    return (
        <ul>
            <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button className="shrink-0 border border-solid border-borderGray w-[min(max(6.412vw,30px),35px)] h-[min(max(6.412vw,30px),35px)] bg-doneButton">
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 1
                    </div>
                <button className="shrink-0 border border-solid border-borderGray w-[min(max(6.412vw,30px),35px)] h-[min(max(6.412vw,30px),35px)] bg-removeButton">
                    <BiTrash />
                </button>
            </li>
            <li className="flex justify-between items-center gap-3 p-[5px] w-full border-b border-b-borderGray border-b-solid">
                <button>
                    <BiCheckCircle />
                </button>
                    <div className="grow">
                    Zadanie 2
                    </div>
                <button >
                    <BiTrash />
                </button>
            </li>
        </ul>
    )
};

export default TasksList;