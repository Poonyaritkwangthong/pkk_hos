"use client";
import { useState } from "react";
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // ทำการนำทางหรือส่งข้อมูลล็อกอินที่นี่
    window.location.href = "/home";
  };

  const [Field, setField] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const changeFieldHandler = (e) => {
    setField({
      ...Field,
      [e.target.name]: e.target.value,
    });
    console.log(Field);
  };

  const onSubmitChange = async (e, Field) => {
    e.preventDefault();
    setField(Field);
    console.log(Field);
  };

  return (
    <div className="relative flex items-center justify-end min-h-screen">
      {/* Background Image */}
      <img
        src="/images/login.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Login Box */}
      <div className="relative bg-white p-8 w-full max-w-md rounded-lg shadow-lg text-center z-10 mr-8 lg:mr-16 border border-[#20a68a]">
        <h1 className="text-2xl font-bold mb-4 text-[#20a68a]">Login</h1>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <div>
            <label className="block text-left font-semibold mb-1 text-[#20a68a]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="text-[#20a68a] w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#20a68a] placeholder-[#20a68a]"
              name="emal"
              onClick={(e) => changeFieldHandler(e)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left font-semibold mb-1 text-[#20a68a]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                name="password"
                className="text-[#20a68a] w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#20a68a] placeholder-[#20a68a]"
                onClick={(e) => changeFieldHandler(e)}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-3 right-3 text-[#20a68a]"
              >
                {showPassword ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeSlashThin size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="/register" className="text-sm text-blue-500 text-right ">
              Register
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#20a68a] text-white font-semibold rounded hover:bg-blue-600"
            onClick={(e) => onSubmitChange(e,Field)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
