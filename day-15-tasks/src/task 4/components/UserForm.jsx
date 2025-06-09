import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;

        onAddUser({ name: name.trim(), email: email.trim() });
        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="task4-user-form">
            <input
                className="task4-user-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="task4-user-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="task4-user-btn">
                Add User
            </button>
        </form>
    );
};

export default UserForm;
