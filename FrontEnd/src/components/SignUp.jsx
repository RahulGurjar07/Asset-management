import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/signup', { name, email, password });
      // Handle successful signup, e.g., redirect or show a success message
      navigate('/signin');
      console.log('Signup successful', res.data);
    } catch (err) {
      setError(err.response.data);
      console.error('Signup error', err.response.data);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="w-full max-w-sm xl:max-w-md mx-auto">
        <div className="mb-4 flex justify-center">
          <img width="100" height="106" src="./pngwing.png" alt="Logo" />
        </div>
        <h2 className="text-center text-2xl font-bold text-black">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="font-medium text-black hover:underline">
            Sign In
          </Link>
        </p>
        {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-900">
              Full Name
            </label>
            <input
              className="mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              type="text"
              placeholder="Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-900">
              Email address
            </label>
            <input
              className="mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-900">
              Password
            </label>
            <input
              className="mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold text-white hover:bg-black/80"
          >
            Create Account <ArrowRight className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}