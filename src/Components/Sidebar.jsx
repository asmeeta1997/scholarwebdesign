import React from 'react';
import ChangePassword from './ChangePassword';
const SideBar = () => {
    return (
        <>
            <div className="bg-light border-right">
                    <div className="list-group list-group-flush list-group-sidebar">
                        <a href="/" className="mt-3 list-group-item list-group-item-action bg-light">Home</a>
                        <a href="/" className="list-group-item list-group-item-action bg-light">My Articles</a>
                        <a href="/" className="list-group-item list-group-item-action bg-light">My Message</a>
                        <a href="/" className="list-group-item list-group-item-action bg-light">Metrics</a>
                        <a href="/" className="list-group-item list-group-item-action bg-light">Manage Alert</a>
                        <a href="/" className="list-group-item list-group-item-action bg-light">My Account</a>
                    </div>
                </div>
        </>
    );
}

export default SideBar;