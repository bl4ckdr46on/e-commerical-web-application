import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleAgreeToTerms = () => {
        setAgreeToTerms(!agreeToTerms);
    };

    const handleSubmit = async () => {
        if (!formData.email || !formData.password || (state === "Sign Up" && !formData.username)) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!agreeToTerms) {
            alert("You must agree to the terms of use and privacy policy.");
            return;
        }

        let url = state === "Login" ? "http://localhost:400/login" : "http://localhost:400/signup";
        let requestData = state === "Login" ? { email: formData.email, password: formData.password } : formData;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("auth-token", data.token);
                window.location.replace("/");
            } else {
                alert(data.errors);
            }
        } catch (error) {
            console.error("Fetch error: ", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" && (
                        <input
                            name="username"
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    )}
                    <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button onClick={handleSubmit}>
                    Continue
                </button>
                <p className="loginsignup-login">
                    {state === "Sign Up" ? (
                        <>
                            Already have an account?{" "}
                            <span onClick={() => setState("Login")}>Login here</span>
                        </>
                    ) : (
                        <>
                            Need an account?{" "}
                            <span onClick={() => setState("Sign Up")}>Create one here</span>
                        </>
                    )}
                </p>
                <div className="loginsignup-agree">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={agreeToTerms}
                        onChange={toggleAgreeToTerms}
                    />
                    <label htmlFor="agreeToTerms"> By continuing, I agree to the terms of use & privacy policy.</label>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
