import { closeErrorFetchExampleData, configFetchErrorState, configLoadingState, fetchExampleData } from "../../configuration/configurationSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

const EmptyTasksList = () => {
    const dispatch = useAppDispatch();
    const isLoading: boolean = useAppSelector(configLoadingState);
    const isError: boolean = useAppSelector(configFetchErrorState);

    return (
        <div className="grow">
            {isLoading ?
                (
                    <>
                        <p className="text-center mb-2 text-disabledGray ">Ładowanie danych...</p>
                        {isError && (
                            <div className="w-[min(300px,100%)] mx-auto">
                                <p className="text-sm text-removeButton mb-2">Błąd ładowania danych. Spróbuj jeszcze raz. </p>
                                <div className="flex justify-end pr-2">
                                    <button
                                        onClick={() => dispatch(closeErrorFetchExampleData())}
                                        className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-sm/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue"
                                    >
                                        Zamknij
                                    </button>
                                </div>
                            </div>)}
                    </>
                ) : (
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
            }
        </div>
    )
};

export default EmptyTasksList;