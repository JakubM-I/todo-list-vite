import { useDispatch } from "react-redux";
import { fetchEXampleTask } from "../taskSlice";
import { fetchExampleData } from "../../configuration/configurationSlice";

const EmptyTasksList = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="grow">
            <p className="text-center mb-2">Dodaj swoje pierwsze zadanie</p>
            <span className="flex justify-center items-center gap-1">
                <p>lub</p>
                <button onClick={() => dispatch(fetchExampleData())} 
                    className="text-exmapleTaskButton hover:text-exmapleTaskButtonHover "
                >
                    wczytaj przykładowe zadania
                </button>
            </span>
        </div>
    )
};

export default EmptyTasksList;