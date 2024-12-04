import Link from "next/link";
import Image from "next/image";
import Logo from 'img/Logo.svg';

const SideBar = () => {
    return ( 
        <aside className="d-flex flex-col items-center backdrop-blur-[10px] shadow-[0px_0px_30px_rgba(227,228,237,0.37)] border-[2px solid rgba(255, 255, 255, 0.18)]">
            <div className="p-4 border-b-[5px] border-b-[rgba(0,0,0)]">
                <Link href={'#'}>
                    <Image src={Logo} alt="logo"/>
                </Link>
            </div>
        </aside>
     );
}
 
export default SideBar;