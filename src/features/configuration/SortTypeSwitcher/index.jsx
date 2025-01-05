import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { configSortTypeSelector, toggleSortType } from "../configurationSlice";
import { openModal } from "../../../common/PopupModal/modalSlice";

const SortTypeSwitcher = () => {
    const currentSortType = useSelector(configSortTypeSelector);
    const dispatch = useDispatch();
    const [selectedSortType, setSelectedSortType] = useState(currentSortType);
    const openElement = {
        title: "Powiadomienie",
        body: "notification",
        data: "Zmiana sortowania została zapisana"
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(toggleSortType(selectedSortType));
        dispatch(openModal(openElement));
    }

    return (
        <div className="border border-solid border-borderGray p-2 w-[min(210px,100%)]">
            <p className="pb-2 font-bold text-base">Domyślne sortowanie</p>
            <form onSubmit={onFormSubmit}
                className="ml-2"
            >
               <div className="mb-2">
                    <div className="flex justify-start items-center gap-2">
                        <input 
                            type="radio" 
                            name="sortType" 
                            id="date" 
                            value="date" 
                            checked={selectedSortType === "date"}
                            onChange={({target}) => setSelectedSortType(target.value)}
                            className="cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="date">Data</label>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <input 
                            type="radio" 
                            name="sortType" 
                            id="category" 
                            value="category" 
                            checked={selectedSortType === "category"}
                            onChange={({target}) => setSelectedSortType(target.value)}
                            className="cursor-pointer"
                        />
                        <label className="cursor-pointer" htmlFor="category">Kategorie</label>
                    </div>
                </div>
                <div className="flex justify-end pr-2">
                    <button className="bg-primaryBlue rounded-lg border border-primaryBlue text-primaryLightColor text-[min(max(2.89vw,14px),17px)]/[1] py-2 px-3 transition-colors easy-in duration-700 hover:bg-primaryLightColor hover:text-primaryBlue">
                        Zpisz
                    </button>
                </div>
            </form>
        </div>
    )
};

export default SortTypeSwitcher;