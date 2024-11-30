import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { openSearchingTasks } from "../../features/tasks/taskSlice";

const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("szukaj"));
    const inputRef = useRef(null);
    const dispatch= useDispatch();

    const searchOnSubmit = (e) => {
        e.preventDefault();
        setSearchParams(query.trim() 
            ? {szukaj: query} 
            : searchParams.delete("szukaj"))
        dispatch(openSearchingTasks());
        setQuery("");
        inputRef.current.focus();
    }

    return (
        <form action="" className="flex justify-end items-center gap-2" onSubmit={searchOnSubmit}>
            <input 
                className="p-[4px] text-[14px]/[1] text-primaryTextColor placeholder:text-[14px]/[1]" 
                type="text"
                ref={inputRef}
                value={query ? query : ""}
                placeholder="Wyszukaj zadanie" 
                onChange={({target}) => setQuery(target.value)}
             />
            <button 
                className="appearance-none p-1 bg-borderGray border rounded-lg border-borderGray transition easy-in duration-700 hover:bg-secondaryText"
                
            >
                <BiSearch />
            </button>
        </form>
    )
};

export default SearchBar;