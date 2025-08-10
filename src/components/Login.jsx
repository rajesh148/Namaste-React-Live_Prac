// Login.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username }));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl px-8 py-10"
        >
          <h1 className="text-2xl font-extrabold text-orange-600 mb-2 text-center tracking-tight">
            Swiggy
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Login to your account
          </p>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone number or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 text-base transition"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 text-base transition"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6 text-xs">
            <label className="flex items-center">
              <input type="checkbox" className="accent-orange-500" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-orange-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold text-base shadow hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
