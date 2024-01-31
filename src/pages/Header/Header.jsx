import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav style={{width:"500px", margin: "30px auto", display: "flex", justifyContent:"space-around"}}>
                    <Link to="/" >Users</Link>
                    <Link to="/posts/">Posts</Link>
                    <Link to="details"> Details</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Header;