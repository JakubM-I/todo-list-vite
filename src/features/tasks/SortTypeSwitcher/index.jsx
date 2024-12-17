import { useDispatch } from "react-redux";
import { toggleSortType } from "../taskSlice";
import { useState } from "react";

const SortTypeSwitcher = () => {
    const dispatch = useDispatch();
    const [selectedSortType, setSelectedSortType] = useState("date");

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(toggleSortType({
            sortType: selectedSortType
        }))
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