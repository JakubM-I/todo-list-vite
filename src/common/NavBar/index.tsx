import { NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/done-icon.png";
import SearchBar from "../SearchBar";
import {Fade as Hamburger} from "hamburger-react";
import { uiIsMobile } from "../../features/ui/uiSlice";
import { MenuRoutesUrl } from "../../types/interfaces";

const NavBar: React.FC = () => {
        const isMobile = useSelector(uiIsMobile);
        const menuRoutes = useLoaderData() as MenuRoutesUrl[];
        const [isOpen, setIsOpen] = useState<boolean>(false);

        const handleCloseMenu = (): void => setIsOpen(false);

    return(
        <div className="p-0 pr-3 mobile-t:p-3 bg-primaryGreyColor mb-8 flex justify-between items-center relative">
            {isMobile ? (
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} direction="right" />
            ) : (
                <div className="flex gap-2 justify-start items-center">
                    <img src={logo} alt="TaskApp" />
                    <h1 className="font-bold text-[24px]/[1] text-black">TaskApp</h1>
                </div>
            )}
            <div className={isMobile ? `py-4 px-5 absolute left-1 top-[50px] bg-primaryGreyColor z-[5] ${isOpen ? "block": "hidden" }` : ""}>
                <ul className="flex flex-col mobile-t:flex-row justify-center items-center gap-4">
                    {menuRoutes.map(route => (
                        <li key={route.id}>
                            <NavLink 
                                to={route.url} 
                                className="hover:text-primaryBlueHover"
                                onClick={isMobile ? () => handleCloseMenu() : undefined}
                            >
                                {route.name}
                            </NavLink>
                        </li> 
                    ))}
                </ul>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
        )
    };

export default NavBar;