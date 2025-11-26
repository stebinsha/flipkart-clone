import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8080/api";

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [isExistingUser, setIsExistingUser] = useState(null);
 
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

 
  const checkEmailExists = async () => {
    try {
      const res = await fetch(`${API}/user/check?email=${email}`);
      const json = await res.json();
      return json.exists;
    } catch {
      return false;
    }
  };

  
  const handleRequestOtp = async () => {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    const exists = await checkEmailExists();
    setIsExistingUser(exists);

    if (mode === "register") {
      if (exists) {
        setError("Email already registered. Please login.");
        return;
      }
      if (!username.trim() || !password.trim()) {
        setError("Enter username & password");
        return;
      }
    }

    try {
      const res = await fetch(`${API}/otp/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setError("Failed to send OTP");
        return;
      }

      setOtp(["", "", "", "", "", ""]);
      setTimer(30);
      setMode("otp");

      showToast("OTP sent to your email", "success");

    } catch {
      setError("Failed to send OTP. Try again.");
    }
  };

  
  useEffect(() => {
    if (mode !== "otp") return;
    if (timer === 0) return;

    const int = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(int);
  }, [mode, timer]);

  
  const handleOtpChange = (val, i) => {
    if (val && !/^[0-9]$/.test(val)) return;

    const copy = [...otp];
    copy[i] = val;
    setOtp(copy);

    if (val && i < 5) {
      document.getElementById(`otp-${i + 1}`)?.focus();
    }
  };

 
  const handleVerifyOtp = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      showToast("Enter full 6 digit OTP", "error");
      return;
    }

    try {
      const res = await fetch(`${API}/otp/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code }),
      });

      const json = await res.json();
      if (!json.valid) {
        showToast("Invalid OTP", "error");
        return;
      }
 
      if (!isExistingUser && mode === "otp") {
        const r2 = await fetch(`${API}/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        });

        if (!r2.ok) {
          showToast("Registration failed", "error");
          return;
        }

        localStorage.setItem("flipkart_username", username);
        showToast("Registered successfully", "success");
        navigate("/");
        return;
      }

 
      if (isExistingUser) {
        const r3 = await fetch(`${API}/user/get?email=${email}`);
        const j3 = await r3.json();

        localStorage.setItem("flipkart_username", j3.username);
        showToast("Login successful", "success");
        navigate("/");
      }

    } catch {
      showToast("OTP verification error", "error");
    }
  };

 
  const resendOtp = async () => {
    setTimer(30);
    await fetch(`${API}/otp/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    showToast("OTP Resent", "success");
  };

  return (
    <div className="content-head">
 
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.msg}
        </div>
      )}

      
      <div className="login-link">
        <span><span>Login</span></span>
        <p>Get access to your Orders, Wishlist and more</p>
        <img src="login.png" alt="" />
      </div>

     
      <div className="right-side">

     
        {mode === "login" && (
          <div className="form">
            <input
              type="text"
              className={`form-input ${error ? "error-border" : ""}`}
              placeholder="Enter Email/Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button className="otp-btn" onClick={handleRequestOtp}>
              Request OTP
            </button>

            <a className="create-acc" onClick={() => { 
              setMode("register"); 
              setError(""); 
            }}>
              New User? Create an account
            </a>
          </div>
        )}

  
        {mode === "register" && (
          <div className="form">

            <input
              type="email"
              className="form-input"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              className="form-input"
              placeholder="Create Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="form-input"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <button className="otp-btn" onClick={handleRequestOtp}>
              Request OTP
            </button>

        
              <button className="exist-btn" onClick={() => { setMode("login"); setError(""); }}>
                Existing User? Login
              </button>
            
          </div>
        )}

      
        {mode === "otp" && (
          <div className="otp-container">
            <h6>Please enter the OTP sent to <a style={{color:"blue"}}>{email}</a></h6>

            <div className="otp-box-wrapper">
              {otp.map((d, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  maxLength="1"
                  className="otp-box"
                  value={d}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                />
              ))}
            </div>

            <button className="verify-btn" onClick={handleVerifyOtp}>
              Verify OTP
            </button>

            <p className="resend-text">
              {timer > 0 ? (
                <>Code expires in: {timer}s</>
              ) : (
                <button className="resend-btn" onClick={resendOtp}>
                  Resend Code
                </button>
              )}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
