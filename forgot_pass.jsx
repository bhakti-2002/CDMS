import React, { useState } from "react";

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = () => {
    // Simulate no search results
    if (inputValue.trim() === "") {
      setErrorMsg(
        "No Search results. Your search did not match any results. Please try again with valid Email/Mobile Number"
      );
    } else {
      // Simulate always showing no results for now
      setErrorMsg(
        "No Search results. Your search did not match any results. Please try again with valid Email/Mobile Number"
      );
    }
  };

  const handleCancel = () => {
    setInputValue("");
    setErrorMsg("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="max-w-md w-full text-center border rounded bg-white p-6">
        <h1 className="text-2xl font-semibold mb-2">Find Your Account</h1>
        <p className="text-gray-700 mb-6">
          Please enter your Email address or Mobile Number
        </p>

        <input
          type="text"
          placeholder="Email/ Mobile Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-full text-center text-gray-500 mb-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* Show error message if exists */}
        {errorMsg && (
          <p className="text-red-500 text-sm mb-4">{errorMsg}</p>
        )}

        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={handleSearch}
            className="bg-blue-700 text-white px-6 py-2 rounded-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
