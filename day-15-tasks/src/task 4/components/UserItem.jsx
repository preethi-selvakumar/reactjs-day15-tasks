import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
    return (
        <li className="task4-user-item">
            <div className="task4-user-info">
                <strong>{user.name}</strong> - {user.email}
            </div>
            <div className="task4-user-actions">
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
        </li>
    );
};

export default UserItem;
