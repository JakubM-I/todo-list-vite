import { NavLink } from "react-router-dom";
import logo from "../../assets/done-icon.png"
import SearchBar from "../SearchBar";
import {Fade as Hamburger} from "hamburger-react";
import { useState, useEffect } from "react";

const NavBar = () => {
        const [isMobile, setIsMobile] = useState(false);
        const mobileBreakePoint = 768;
    
        const windowWidth = window.innerWidth;
        
        useEffect(() =>{
            if(windowWidth <= mobileBreakePoint){
                setIsMobile(true)
            }
        }, [])
    return(
        <div className="p-3 bg-primaryGreyColor mb-8 flex justify-between items-center relative">
            {isMobile ? (
                <Hamburger size={22} direction="right"/>
            ) : (
                <div className="flex gap-2 justify-start items-center">
                    <img src={logo} alt="TaskApp" />
                    <h1 className="font-bold text-[24px]/[1] text-black">TaskApp</h1>
                </div>
            )}
            {/* <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div> */}
            <div>
                <ul className="flex justify-center items-center gap-3">
                    <li>
                        <NavLink 
                            to={"/"} 
                            className="hover:text-primaryBlueHover"
                        >
                            Zadania
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"categories"}
                            className="hover:text-primaryBlueHover"
                        >
                            Kategorie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"configuration"}
                            className="hover:text-primaryBlueHover"
                        >
                            Ustawienia
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="">
                <SearchBar />
            </div>
        </div>
        )
    };

export default NavBar;