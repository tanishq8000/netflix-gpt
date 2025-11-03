import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleText = isSignUp ? "Already a member?" : "New to Netflix-gpt?";
  const toggleLink = isSignUp ? "Sign In" : "Sign up now.";

  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute my-32 bg-black/80 text-amber-50 mx-auto left-0 right-0 rounded-lg "
      >
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
          ref={email}
          type="text"
          placeholder="Enter your Email"
          className="p-3 my-4 w-full border border-white bg-gray-700"
        />
        {/* Conditionally render password field for Sign In only */}
        {!isSignUp && (
          <input
            ref={password}
            type="password" // Changed to password for security
            placeholder="Password"
            className="p-3 my-4 w-full border border-white bg-gray-700"
          />
        )}

        {isSignUp && (
          <input
            type="password"
            placeholder="Choose your Password"
            className="p-3 my-4 w-full border border-white bg-gray-700"
          />
        )}

        <p className="text-red-700 font-semibold text-md">{errorMessage}</p>

        {/* 💡 Use the prop for the button text */}
        <button
          className="w-full bg-rose-700 p-2.5 my-4 rounded-lg"
          onClick={handleButtonClick}
        >
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
