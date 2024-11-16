import { BiSearch } from "react-icons/bi";

const SearchBar = () => (
    <form action="" className="flex justify-end items-center gap-2">
        <input className="p-[4px] text-[14px]/[1] text-primaryTextColor placeholder:text-[14px]/[1]" 
            type="text"
            placeholder="Wyszukaj zadanie"  />
        <button className="appearance-none p-1 bg-borderGray border rounded-lg border-borderGray transition easy-in duration-700 hover:bg-secondaryText">
            <BiSearch />
        </button>
    </form>
);

export default SearchBar;