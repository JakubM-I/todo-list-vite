import { useDispatch, useSelector } from "react-redux";
// import { tasksSortType } from "../taskSlice";
import { useState } from "react";
import { configurationSortTypeSelector, toggleSortType } from "../../configuration/configurationSlice";

const SortTypeSwitcher = () => {
    const currentSortType = useSelector(configurationSortTypeSelector);
    const dispatch = useDispatch();
    const [selectedSortType, setSelectedSortType] = useState(currentSortType);

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(toggleSortType(selectedSortType))
    }

    return (
        <div>
            <p>Domyślne sortowanie</p>
            <form onSubmit={onFormSubmit}>
               <div>
                    <div>
                        <label htmlFor="date">Data</label>
                        <input 
                            type="radio" 
                            name="sortType" 
                            id="date" 
                            value="date" 
                            checked={selectedSortType === "date"}
                            onChange={({target}) => setSelectedSortType(target.value)}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Kategorie</label>
                        <input 
                            type="radio" 
                            name="sortType" 
                            id="category" 
                            value="category" 
                            checked={selectedSortType === "category"}
                            onChange={({target}) => setSelectedSortType(target.value)}
                        />
                    </div>
                </div>
                <button>Zpisz</button>
            </form>
        </div>
    )
}

export default SortTypeSwitcher;