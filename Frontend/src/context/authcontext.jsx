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

        if (token && userId) {
            console.log("Fetching user data...");
            axios
                .get(`${backend}/api/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    console.log("User data fetched:", response.data);
                    setUser(response.data); 
                })
                .catch((error) => {
                    console.error("Authentication error:", error);
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("userId");
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = (token, userId) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", userId);

        axios
            .get(`${backend}/api/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log("User logged in:", response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
