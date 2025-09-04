import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { backend } from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const userId = localStorage.getItem("userId");
        const role = localStorage.getItem("role");

        if (token && userId) {
            console.log("Fetching user data...");
            if (userId === 'admin' || role === 'admin') {
                setUser({ id: 'admin', username: 'Admin', email: 'admin@example.com', role: 'admin' });
                setLoading(false);
            } else {
                axios
                    .get(`${backend}/api/users/${userId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    })
                    .then((response) => {
                        console.log("User data fetched:", response.data);
                        setUser({ ...response.data, role: 'user' }); 
                    })
                    .catch((error) => {
                        console.error("Authentication error:", error);
                        localStorage.removeItem("authToken");
                        localStorage.removeItem("userId");
                        localStorage.removeItem("role");
                    })
                    .finally(() => setLoading(false));
            }
        } else {
            setLoading(false);
        }
    }, []);

    const login = (token, userId, role) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", userId);
        if (role) localStorage.setItem("role", role);

        if (userId === 'admin' || role === 'admin') {
            setUser({ id: 'admin', username: 'Admin', email: 'admin@example.com', role: 'admin' });
        } else {
            axios
                .get(`${backend}/api/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    console.log("User logged in:", response.data);
                    setUser({ ...response.data, role: 'user' });
                })
                .catch((error) => {
                    console.error("Login error:", error);
                });
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
