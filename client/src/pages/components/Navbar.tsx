import { useEffect, useState } from "react";
import Logo from '../../imgs/logo.png';

type navbarProps = {
    handleThemeChange: () => void;
    selectedTheme: string;
}

type navLink = {
    id: number;
    text: string;
    href: string;
    disabled: string;
}

export default function Navbar(props: navbarProps) {

    const [navlinks, setNavlinks] = useState([]);

    const fetchNavLinks = () => {
        fetch("http://localhost:3001/navbar/")
            .then(res => res.json())
            .then(data => setNavlinks(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchNavLinks();
    }, []);

    return (<>

        <nav className="h-16 items-center flex bg-gray-100 border-solid border-gray-300 px-20 sm:px4 py-5 rounded-b dark:bg-gray-700 dark:border-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="text-gray-800 text-2xl font-semibold whitespace-nowrap dark:text-white w-36"><img src={Logo} alt="logo" /></a>
                <div className="flex items-center">

                    <div className="nav-items">
                        {
                            navlinks.map((navlink: navLink) => {
                                return navlink.disabled === 'N' ?
                                    (
                                        <a className="text-gray-800 dark:text-white text-xl px-3 ease duration-300 hover:text-gray-500 dark:hover:text-gray-400" href={navlink.href} key={navlink.id}>{navlink.text}</a>
                                    ) : (
                                        <a className="text-gray-400 text-xl px-3 ease duration-300 hover:cursor-not-allowed" href={'#'} key={navlink.id}>{navlink.text}</a>
                                    )
                            })
                        }
                    </div>

                    <button className="text-gray-800 text-2xl font-semibold whitespace-nowrap ml-5" onClick={props.handleThemeChange}>
                        {props.selectedTheme === "light" ? "🌙" : "🌞"}
                    </button>
                </div>
            </div>
        </nav>

    </>);
}
