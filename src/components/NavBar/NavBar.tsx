import Link from "next/link";
import styled from "./nav-bar.module.scss";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { AccountCircle, AddBox, Favorite, Search } from "@mui/icons-material";

const NavBar = () => {
    return ( 
        <nav className="flex flex-lg-grow-[0.4]">
            <ul className={styled.nav__bar}>
                <Link href={'#'} className={styled.nav__bar__link}>
                    <li><SmartToyIcon/></li>
                </Link>
                <Link href={'#'} className={styled.nav__bar__link}>
                    <li><AccountCircle/></li>
                </Link>
                <Link href={'#'} className={styled.nav__bar__link}>
                    <li><AddBox/></li>
                </Link>
                <Link href={'#'} className={styled.nav__bar__link}>
                    <li><Search/></li>
                </Link>
                <Link href={'#'} className={styled.nav__bar__link}>
                    <li><Favorite/></li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;