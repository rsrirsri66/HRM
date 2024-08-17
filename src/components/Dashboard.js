import React, { useState, useEffect } from 'react';
import '../style.css'; // Ensure you have this CSS file in the same directory

const Dashboard = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const toggleSearchForm = (e) => {
    e.preventDefault();
    setIsSearchFormVisible(!isSearchFormVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
        <a href="#" className="brand">
          <i className='bx bxs-smile'></i>
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-message-dots'></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-group'></i>
              <span className="text">Team</span>
            </a>
          </li>
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
      </section>

      <section id="content">
        <nav>
          <i className='bx bx-menu' onClick={toggleSidebar}></i>
          <a href="#" className="nav-link">Categories</a>
          <form action="#" onSubmit={toggleSearchForm}>
            <div className={`form-input ${isSearchFormVisible ? 'show' : ''}`}>
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className={`bx ${isSearchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
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

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <i className='bx bxs-cloud-download'></i>
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <i className='bx bxs-calendar-check'></i>
              <span className="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-group'></i>
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-dollar-circle'></i>
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <i className='bx bx-search'></i>
                <i className='bx bx-filter'></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="img/people.png" alt="User" />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <i className='bx bx-plus'></i>
                <i className='bx bx-filter'></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className='bx bx-dots-vertical-rounded'></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
