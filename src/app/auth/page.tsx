'use client';

import { useState } from 'react';
import { Gift, User, Box, CircleUser, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function AuthPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ PARTIE SUPÉRIEURE (bleue) */}
      <div className="bg-teal-500 flex flex-col flex-1">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-65 py-4">
          <div className="flex items-center gap-2 text-white">
            <Gift className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wide">DEXCHANGE SAAS</span>
          </div>

          <div className="flex items-center gap-8 text-white text-[8px]">
            <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Box className="w-3 h-3" /> DASHBOARD
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <User className="w-3 h-3" /> PROFILE
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <CircleUser className="w-3 h-3" /> SIGN UP
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <KeyRound className="w-3 h-3" /> SIGN IN
            </a>
          </div>

          <Button className="bg-white text-teal-600 px-5 py-1.5 text-xs rounded-full hover:bg-gray-100 transition">
            Call to action
          </Button>
        </nav>

        {/* Hero text */}
        <div className="text-center mt-3 mb-8">
          <h1 className="text-white text-2xl font-bold tracking-wide">Welcome!</h1>
        </div>
      </div>

      {/* ✅ PARTIE INFÉRIEURE (blanche) */}
      <div className="flex justify-center items-start bg-white flex-1 relative pb-16">
  <Card className="w-full max-w-xs p-5 shadow-xl bg-white rounded-2xl absolute -top-45">
    <h2 className="text-[14px] font-bold text-center text-gray-800 mb-4">Register with</h2>

    {/* Social Login Buttons */}
    <div className="flex gap-3 justify-center -mt-7 -mb-4 ">
      {/* Facebook */}
      <Button variant="icon" className="p-2 border-1 rounded-[10%]">
        <FontAwesomeIcon icon={faFacebook} className="text- w-6 h-6" />
      </Button>

      {/* Apple */}
      <Button variant="icon" className="p-2 border-1 rounded-[10%]">
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
      </Button>
      {/* Google */}
      <Button variant="icon" className="p-2 border-1 rounded-[10%]">
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="black" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </Button>
    </div>

    <div className="text-center text-gray-400 text-sm mb-1">or</div>

    {/* Formulaire */}
    <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            {/* Remember me */}
            <label className="flex items-center cursor-pointer space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  formData.remember ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform ${
                    formData.remember ? 'translate-x-5' : ''
                  }`}
                ></div>
              </div>
              <span className="text-gray-700 text-xs">Remember me</span>
            </label>

            <Button
              type="submit"
              className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-lg"
            >
              SIGN UP
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-teal-500 hover:text-teal-600 font-semibold">
              Sign in
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
