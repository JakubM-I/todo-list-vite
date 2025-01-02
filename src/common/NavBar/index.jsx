import { NavLink, useLoaderData } from "react-router-dom";
import logo from "../../assets/done-icon.png"
import SearchBar from "../SearchBar";
import {Fade as Hamburger} from "hamburger-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { configIsMobile } from "../../features/configuration/configurationSlice";

const NavBar = () => {
        const isMobile = useSelector(configIsMobile);
        const menuRoutes = useLoaderData();
        // const [isMobile, setIsMobile] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        // const mobileBreakePoint = 768;
    
        // const windowWidth = window.innerWidth;
        
        // useEffect(() =>{
        //     if(windowWidth <= mobileBreakePoint){
        //         setIsMobile(true)
        //     }
        // }, [])

        const handleCloseMenu = () => setIsOpen(false);


    return(
        <div className="p-0 pr-3 mobile-t:p-3 bg-primaryGreyColor mb-8 flex justify-between items-center relative">
            {isMobile ? (
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} direction="right"
                    className="w-[28px] h-[28px]"
                />
            ) : (
                <div className="flex gap-2 justify-start items-center">
                    <img src={logo} alt="TaskApp" />
                    <h1 className="font-bold text-[24px]/[1] text-black">TaskApp</h1>
                </div>
            )}
            {/* <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div> */}
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
                    {/* <li>
                        <NavLink 
                            to={"/"} 
                            className="hover:text-primaryBlueHover"
                            onClick={isMobile ? () => handleCloseMenu() : undefined}
                        >
                            Zadania
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"categories"}
                            className="hover:text-primaryBlueHover"
                            onClick={isMobile ? () => handleCloseMenu() : undefined}
                        >
                            Kategorie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"configuration"}
                            className="hover:text-primaryBlueHover"
                            onClick={isMobile ? () => handleCloseMenu() : undefined}
                        >
                            Ustawienia
                        </NavLink>
                    </li> */}
                </ul>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
        )
    };

export default NavBar;