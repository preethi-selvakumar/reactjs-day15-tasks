import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
    if (!users.length) return <p>No users found.</p>;

    return (
        <ul className="task4-user-list">
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default UserList;
