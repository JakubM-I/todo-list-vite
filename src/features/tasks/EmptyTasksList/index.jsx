import { useDispatch } from "react-redux";
import { fetchEXampleTask } from "../taskSlice";

const EmptyTasksList = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="grow">
            <p className="text-center mb-2">Dodaj swoje pierwsze zadanie</p>
            <span className="flex justify-center items-center gap-1">
                <p>lub</p>
                <button onClick={() => dispatch(fetchEXampleTask())} 
                    className="text-exmapleTaskButton hover:text-exmapleTaskButtonHover "
                >
                    wczytaj przykładowe zadania
                </button>
            </span>
        </div>
    )
};

export default EmptyTasksList;