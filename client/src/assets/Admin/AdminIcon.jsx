import React from 'react';

const AdminIcon = () => {
    const adminStyle = {
        width: '34px',

    }
    return (
        <div style={adminStyle}>
            <svg   viewBox="0 0 30 30" width="30" height="30"><path d="M16 14.5c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5s-.2.5-.5.5h-12c-.3 0-.5-.2-.5-.5zm-16 0c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5s-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5zM14.5 0c.3 0 .5.2.5.5v28c0 .3-.2.5-.5.5s-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5z"/></svg>
        </div>
    );
};

export default AdminIcon;