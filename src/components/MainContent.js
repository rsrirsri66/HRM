import React from 'react';
import '../style.css' // Ensure this CSS file contains the styles provided in the HTML

const MainContent = () => {
    return (
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
                            {/* Add table rows here */}
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
                        {/* Add todo list items here */}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
