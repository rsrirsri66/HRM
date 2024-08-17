import React, { useState } from 'react';
import '../style.css'; // Ensure this CSS file contains the styles provided in the HTML

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard');
    const [hideSidebar, setHideSidebar] = useState(false);

    const handleMenuClick = (menuItem) => {
        setActive(menuItem);
    };

    const toggleSidebar = () => {
        setHideSidebar(!hideSidebar);
    };

    return (
        <section id="sidebar" className={hideSidebar ? 'hide' : ''}>
            <a href="#" className="brand">
                <i className='bx bxs-smile'></i>
                <span className="text">AdminHub</span>
            </a>
            <ul className="side-menu top">
                <li className={active === 'Dashboard' ? 'active' : ''}>
                    <a href="#" onClick={() => handleMenuClick('Dashboard')}>
                        <i className='bx bxs-dashboard'></i>
                        <span className="text">Dashboard</span>
                    </a>
                </li>
                <li className={active === 'My Store' ? 'active' : ''}>
                    <a href="#" onClick={() => handleMenuClick('My Store')}>
                        <i className='bx bxs-shopping-bag-alt'></i>
                        <span className="text">My Store</span>
                    </a>
                </li>
                {/* Add other menu items similarly */}
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <i className='bx bxs-cog'></i>
                        <span className="text">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
            <i className='bx bx-menu' onClick={toggleSidebar}></i>
        </section>
    );
};

export default Sidebar;
