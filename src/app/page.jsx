"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Mock user data
  const validUser = {
    email: "nes@gmail.com",
    password: "0615386694",
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    if (email === validUser.email && password === validUser.password) {
      console.log("Login Successful!");
      router.push('/dashboard');
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background Image */}
      <div className="w-[36rem] h-[30rem] p-[2rem] bg-[#ffbae9] shadow-lg">
        <h1 className="text-white text-center text-2xl mb-[2rem]">
          ยินดีต้อนรับเข้าสู่เว็บไซต์ PPKHOS NAPPLUS
        </h1>
        <div className="">
          <img
            className="w-[20rem] h-[20rem] mx-auto"
            src="/images/85.png"
            alt="Logo"
          />
        </div>
      </div>

      {/* Login Form */}
      <div className="relative bg-white p-8 w-[40rem] h-[30rem] max-w-md shadow-lg text-center z-10 mr-8 lg:mr-16">
        <h1 className="text-6xl mt-[3rem] mb-[3rem] text-[#7d8a99]">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              className="block text-left font-semibold mb-1 text-[#707c8a]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email address"
              className="text-[#7d8a99] w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-[#7d8a99]"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-left font-semibold mb-1 text-[#707c8a]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Enter your password"
                className="text-[#7d8a99] w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-[#7d8a99]"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-3 right-3 text-[#7d8a99]"
              >
                {showPassword ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeSlashThin size={20} />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#ffbae9] text-[#d60092] font-semibold rounded hover:bg-[#ffd1f1] text-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
