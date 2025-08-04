import { useState } from "react";
import AuthHeader from "./AuthHeader";
import './TodosApp.css'
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
      <div className="auth-page-container">
      <div className="auth-form-container">
        <AuthHeader
          title="Welcome Back"
          subtitle="Don't have an account yet?"
          linkText="Sign Up"
          linkTo="/sign-up"
        />
        <form onSubmit={handleSignIn} className="auth-form">
          <div className="form-field-group">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="********"
            />
          </div>
          {message && <p className="error-message">{message}</p>}
          <button
            type="submit"
            className="auth-button"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};


export default SignIn