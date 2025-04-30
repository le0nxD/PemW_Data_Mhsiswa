import React, { useState } from "react";
import { User, Lock } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fadeIn bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="glass-card p-8 rounded-2xl shadow-2xl w-full max-w-md border border-emerald-100/20">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6 relative">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-full shadow-xl animate-float">
              <img
                src="dist/assets/unsil.png"
                alt="Unsil Logo"
                className="h-16 w-16 rounded-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-emerald-800 mb-2 bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text animate-pulse-slow">
            Universitas Siliwangi
          </h1>
          <p className="text-emerald-600 text-lg">Sistem Informasi Mahasiswa</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <label className="block text-gray-700 mb-2 font-medium">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                required
                placeholder="Masukkan username"
              />
            </div>
          </div>
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                required
                placeholder="Masukkan password"
              />
            </div>
          </div>
          <div className="gradient-border mt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:translate-y-[-2px]"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
