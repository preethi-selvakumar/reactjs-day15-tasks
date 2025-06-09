import React, { useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import UserForm from "./UserForm";
import UserList from "./UserList";
import EditUserModal from "./EditUserModel";

const UserApp = () => {
    const { users, setUsers, loading, error } = useFetchUsers();
    const [editingUser, setEditingUser] = useState(null);

    const addUser = (user) => {
        user.id = users.length ? users[users.length - 1].id + 1 : 1;
        setUsers([...users, user]);
    };

    const updateUser = (updatedUser) => {
        setUsers(
            users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setEditingUser(null);
    };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="task4-user-app">
            <h1>User Management System</h1>

            <UserForm onAddUser={addUser} />

            {loading && <p>Loading users...</p>}
            {error && <p className="task4-error">{error}</p>}

            <UserList
                users={users}
                onEdit={(user) => setEditingUser(user)}
                onDelete={deleteUser}
            />

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    onClose={() => setEditingUser(null)}
                    onSave={updateUser}
                />
            )}
        </div>
    );
};

export default UserApp;
