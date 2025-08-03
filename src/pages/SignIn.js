import { useState } from "react";
import AuthHeader from "./AuthHeader";
// --- Sign-In Component ---
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle the form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    setMessage('');
    
    // Simple client-side validation
    if (!email || !password) {
      setMessage('Email and password are required.');
      return;
    }

    // Placeholder for API call to backend
    console.log('Attempting to sign in with:', { email, password });
    setMessage('Sign in successful! Redirecting to dashboard...');

    // In a real app, you would make an API call here.
    // Example: fetch('/api/signin', { method: 'POST', body: JSON.stringify({ email, password }) })
    // On success, you'd store a JWT token or user session and navigate to the dashboard.
    
    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthHeader
          title="Welcome Back"
          subtitle="Don't have an account yet?"
          linkText="Sign Up"
          linkTo="/signup"
        />
        
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
            />
          </div>
          {message && <p className="text-sm text-center text-red-500">{message}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};


export default SignIn