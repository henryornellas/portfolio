import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";


const Navbar = () => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6 text-xl shadow-md bg-white`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* LEFT SIDE */}
            <a href='#home' className="font-bold">Henry.dev</a>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
                <div className="flex gap-5 font-semibold text-lg">
                    <a href="#home" className="btn">Home</a>
                    <a href="#about" className="btn">About</a>
                    <a href="#projects" className="btn">Projects</a>
                    <a href="#contact" className="btn">Contact</a>
                </div>)
                :
                (
                    <button
                        className="rounded-full bg-black p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                )}
        </div>
        {/* MOBILE SIDE MENU */}

        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-white">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                    </button>
                </div>

                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )}
    </nav>
}

export default Navbar