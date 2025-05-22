import {navLinks} from "../constants/index.js";
import {useEffect, useState} from "react";

const NavBar = () => {
    const [scrolled , setScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScrolled);

        // Call handler initially to set state on mount
        handleScrolled();

        return () => window.removeEventListener('scroll', handleScrolled);
    }, []);


    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Vaishnavi Astha Gupta
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
