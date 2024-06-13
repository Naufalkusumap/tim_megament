import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { login } from "../auth/auth";  // Sesuaikan jalur impor

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();  // Ganti useHistory dengan useNavigate

  const handleToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    try {
      console.log('Starting login process');
      console.log('Email:', email);
      console.log('Password:', password);
      const token = await login(email, password);
      console.log('Login successful, token:', token);
      if (rememberMe) {
        localStorage.setItem('token', token);
      }
      navigate('/dashboard');  // Gunakan navigate untuk redirect
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-red-700 font-poppins text-center mb-4">
          Megament
        </h1>
        <div className="mt-5 bg-white rounded-xl shadow-md w-80 flex flex-col items-center justify-center">
          <div
            className="bg-red-600 rounded shadow-md w-full w-72 h-32 flex items-center justify-center"
            style={{ marginTop: "-1rem" }}
          >
            <p className="text-white text-xl font-poppins">Sign In</p>
          </div>
          <div className="flex flex-col mt-10 w-full px-4">
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current Password"
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex mb-4 w-full px-4">
            <label className="switch">
              <input type="checkbox" checked={rememberMe} onChange={handleToggle} />
              <span className="slider round"></span>
            </label>
            <span className="ml-2">Remember Me</span>
          </div>
          <div className="w-full px-4 rounded-xl mt-2">
            <button
              className="py-3 bg-red-600 w-full px-10 rounded-lg text-white text-sm font-poppins"
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </div>
          <div className="py-5 px-4 h-20">
            <p className="align-center">
              Don't have an account? <span className="text-red-600">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
