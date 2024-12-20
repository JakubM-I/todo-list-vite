import { useDispatch, useSelector } from "react-redux";
import { configLoadingState, fetchExampleData } from "../../configuration/configurationSlice";

const EmptyTasksList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(configLoadingState);
    
    return (
        <div className="grow">
            {isLoading ? 
                (<p className="text-center mb-2">Ładowanie danych...</p>) : 
                (
                <>
                    <p className="text-center mb-2">Dodaj swoje pierwsze zadanie</p>
                    <span className="flex justify-center items-center gap-1">
                    <p>lub</p>
                    <button onClick={() => dispatch(fetchExampleData())} 
                        className="text-exmapleTaskButton hover:text-exmapleTaskButtonHover "
                    >
                        wczytaj przykładowe dane
                    </button>
                    </span>
                </>
                ) 
            };
        </div>
    )
};

export default EmptyTasksList;