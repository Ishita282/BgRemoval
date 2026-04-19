import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Register = () => {
  const { handleRegister, loading } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-black via-[#070A12] to-black px-4">

      {/* SIGNUP CARD */}
      <div className="w-full max-w-md">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl
                        rounded-2xl p-8 shadow-2xl">

          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white">
              Create your account
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Join thousands removing backgrounds in seconds
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={submitHandler} className="space-y-4">

            <input
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10
                         text-white placeholder-gray-500 outline-none
                         focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10
                         text-white placeholder-gray-500 outline-none
                         focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-fuchsia-500
                         text-white py-3 rounded-full font-medium
                         hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300 shadow-lg shadow-fuchsia-500/20"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

          </form>

          {/* TRUST + VALUE LINE */}
          <div className="mt-6 text-center space-y-2">

            <p className="text-xs text-gray-500">
              Free to start • No credit card required
            </p>

            <p className="text-xs text-gray-600">
              By signing up, you get instant access to AI background removal
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;