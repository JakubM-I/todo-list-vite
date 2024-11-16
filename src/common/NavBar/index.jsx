import logo from "../../assets/done-icon.png"
import SearchBar from "../SearchBar";

const NavBar = () => (
    <div className="p-3 bg-primaryGreyColor mb-8 flex justify-center items-center relative">
        <div className="flex gap-2 justify-start items-center mr-auto">
            <img src={logo} alt="TaskApp" />
            <h1 className="font-bold text-[24px]/[1] text-black">TaskApp</h1>
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <p>Menu</p>
        </div>
        <div className="ml-auto">
            <SearchBar />
        </div>
    </div>
);

export default NavBar;