"use client"
import React, { useState, useEffect } from 'react'

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isScroll, setIsScroll] = useState(false)

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`header ${isScroll ? 'blur-header' : ''}`} id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    Royal Heritage Trips
                </a>

                <div className={`nav__menu ${isActive ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/#home" className="nav__link active-link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="/#about" className="nav__link">About</a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="/#popular" className="nav__link">Popular</a>
                        </li> */}

                        {/* <li className="nav__item">
                            <a href="/#explore" className="nav__link">Explore</a>
                        </li> */}

                        <li className="nav__item">
                            <a href="/tour-main" className="nav__link">Tours</a>
                        </li>

                        <li className="nav__item">
                            <a href="/car-rental" className="nav__link">Car Rentel</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={toggleClass}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </div>
    )
}

export default Header