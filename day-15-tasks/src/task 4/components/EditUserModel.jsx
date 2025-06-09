import React, { useState, useEffect } from "react";

const EditUserModal = ({ user, onClose, onSave }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;

        onSave({ ...user, name: name.trim(), email: email.trim() });
    };

    return (
        <div className="task4-modal-overlay">
            <div className="task4-modal-content">
                <button className="task4-modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="task4-user-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        className="task4-user-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        style={{ marginTop: "10px" }}
                    />
                    <button type="submit" className="task4-user-btn" style={{ marginTop: "15px" }}>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;
