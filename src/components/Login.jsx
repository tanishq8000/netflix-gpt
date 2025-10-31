import React from "react";
import Header from "./Header";

const Login = () => {
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
        <h1 className="text-3xl mb-5 font-semibold">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address or Mobile number"
          className="p-3 my-4 w-full border border-white bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 my-4 w-full border border-white bg-gray-700"
        />
        <button className="w-full bg-rose-700 p-2.5 my-4 rounded-lg">
          Submit
        </button>
        <p className="text-gray-400 text-sm mt-4 cursor-pointer hover:underline">
          New to Netflix-gpt?{" "}
          <span className="text-white font-medium mx-1">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
