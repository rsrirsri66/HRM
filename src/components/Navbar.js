import React, { useState } from 'react';
import '../style.css'; // Ensure this CSS file contains the styles provided in the HTML

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSearch = (e) => {
        if (window.innerWidth < 576) {
            e.preventDefault();
            setShowSearch(!showSearch);
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <nav>
            <i className='bx bx-menu'></i>
            <a href="#" className="nav-link">Categories</a>
            <form action="#">
                <div className={`form-input ${showSearch ? 'show' : ''}`}>
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn" onClick={toggleSearch}>
                        <i className={`bx ${showSearch ? 'bx-x' : 'bx-search'}`}></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden checked={isDarkMode} onChange={toggleDarkMode} />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <a href="#" className="notification">
                <i className='bx bxs-bell'></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src="img/people.png" alt="Profile" />
            </a>
        </nav>
    );
};

export default Navbar;
