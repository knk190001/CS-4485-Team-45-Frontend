import React, { useContext, useState } from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { PrefixContext } from "./index.jsx";

export default function Welcome() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const prefix = useContext(PrefixContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${prefix}/api/login/${username}/${password}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                // Assuming the server handles session or token authentication
                navigate("/lobby");  // Navigate to the lobby upon successful login
                console.log("Login successful."); // Log success or handle accordingly
            } else {
                console.error("Login failed:", response.status);
                alert("Failed to log in. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Error while logging in:", error);
            alert("Failed to log in. Please try again.");
        }
    };

    return (
        <div id="welcomeScreen">
            <img src={logo} alt="Logo" id="welcomeLogo" />
            <div id="usernameForm">
                <h1>Login to Play:</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="lobbyBttns">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
