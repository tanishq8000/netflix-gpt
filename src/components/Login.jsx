import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleText = isSignUp ? "Already a member?" : "New to Netflix-gpt?";
  const toggleLink = isSignUp ? "Sign In" : "Sign up now.";

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/37160e4c-a26b-459c-a83e-d7e972e2aea1/web/IN-en-20251027-TRIFECTA-perspective_f563e160-0cc1-4cb1-9c72-2fc41aae986e_large.jpg"
          alt="bg image"
        />
      </div>
      <form className="w-3/12 p-12 absolute my-32 bg-black/80 text-amber-50 mx-auto left-0 right-0 rounded-lg ">
        {/* 💡 Use the prop for the heading */}
        <h1 className="text-3xl mb-5 font-semibold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text" // Changed to password for security
            placeholder="Enter your Name"
            className="p-3 my-4 w-full border border-white bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-3 my-4 w-full border border-white bg-gray-700"
        />
        {/* Conditionally render password field for Sign In only */}
        {!isSignUp && (
          <input
            type="password" // Changed to password for security
            placeholder="Password"
            className="p-3 my-4 w-full border border-white bg-gray-700"
          />
        )}

        {isSignUp && (
          <input
            type="password" // Changed to password for security
            placeholder="Choose your Password"
            className="p-3 my-4 w-full border border-white bg-gray-700"
          />
        )}

        {/* 💡 Use the prop for the button text */}
        <button className="w-full bg-rose-700 p-2.5 my-4 rounded-lg">
          {isSignUp ? "Get Started" : "Sign In"}
        </button>

        {/* 💡 Use the conditional prop logic for the toggle link */}
        <p
          className="text-gray-400 text-sm mt-4 cursor-pointer hover:underline"
          onClick={handleToggleForm}
        >
          {toggleText}{" "}
          <span className="text-white font-medium mx-1">{toggleLink}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
