import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200">
      <main className="flex-grow pb-16">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Dashboard />
        )}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-4 px-4 shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto">
          <p className="text-center text-sm md:text-base">
            Dibuat oleh{' '}
            <span className="font-semibold bg-gradient-to-r from-white to-emerald-200 text-transparent bg-clip-text">
              Muhammad Naufal Darlian - 237006152
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;