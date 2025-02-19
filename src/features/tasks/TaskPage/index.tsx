import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { editTask, searchTaskById } from "../taskSlice";
import { uiIsMobile } from "../../ui/uiSlice";
import { BiCheckCircle } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import EditTaskForm from "../EditForm";
import { toggleTaskPriority } from "../../../utils/toggleTaskPriority";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { Task } from "../../../types/interfaces";

const TaskPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const query = searchParams.get("szukaj");
    const task: Task = useAppSelector(state => searchTaskById(state, id));
    const dispatch = useAppDispatch();
    const isMobile: boolean = useAppSelector(uiIsMobile);

    const onClickBack = (): void => {
        navigate(`/${query ? `?szukaj=${query}` : ""}`)
    }

    const handleContentCLick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    }

    return (
        <div className={`${isMobile ? "absolute left-0 right-0 top-0 bottom-0 bg-transparentDarkBackground" : "w-[50%]"}`}
            onClick={isMobile ? () => onClickBack() : undefined}
        >
            <div className={`${isMobile ? "w-full h-full mobile-l:h-auto mobile-l:w-[calc(100%-25px)] translate-x-[-50%] relative left-1/2 top-0 mobile-l:top-[5%] bg-primaryLightColor mobile-l:rounded-lg" : "sticky top-0"}`}
                onClick={isMobile ? handleContentCLick : undefined}
            >
                <div>
                    <span className="flex justify-end pt-1 mobile-t:pt-0">
                        <button onClick={() => onClickBack()} className="pr-1 p-[2px] mb-1 mr-1 mobile-t:mr-0 border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
                        </button>
                    </span>
                </div>
                {isEdit ? (
                    <EditTaskForm
                        editedTask={task}
                        onCancel={() => setIsEdit(false)}
                        onSubmit={(editedTask) => {
                            dispatch(editTask(editedTask));
                            setIsEdit(false);
                        }}
                    />
                ) : (
                    <>
                        <div className="flex justify-start items-center border-t border-x rounded-t border-solid border-borderGray bg-primaryGreyColor">
                            <span className={`flex justify-center items-center text-doneButton ${task.taskDone && "pl-2"}`}>{task.taskDone ? (<BiCheckCircle />) : ""}</span>
                            <h3 className={`font-bold text-base/[1] p-2 ${task.taskDone && "line-through"}`}>{task.taskName}</h3>
                            {!task.taskDone && (<button
                                className="ml-auto mr-2 p-[3px] border border-primaryLightColor hover:border-solid hover:border-borderGray hover:bg-[#e2e8f052] rounded"
                                onClick={() => setIsEdit(true)}
                            >
                                <BiEditAlt />
                            </button>)}
                        </div>
                        <div className="border-none mobile-l:border-solid rounded-b border border-borderGray p-2">
                            <p className="block text-sm/[1.2] mb-3 p-1">{task.taskDesc}</p>
                            <div className="flex gap-2 items-center">
                                {task.taskDate && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskDate}</p>)}
                                {task.taskCategory && (<p className="block text-xs/[1] p-[5px] border border-solid border-borderGray rounded">{task.taskCategory}</p>)}
                                {task.taskPriority === "0" || task.taskPriority === "1" ? "" : (<p className="block text-xs/[1] p-[4px] border border-solid border-borderGray rounded">{toggleTaskPriority(task.taskPriority!)}</p>)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};

export default TaskPage;