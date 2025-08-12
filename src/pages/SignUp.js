import { useState } from "react";
import AuthHeader from "./AuthHeader";
import './TodosApp.css'
// --- Sign-Up Component ---
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle the form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setMessage('');

    // Simple client-side validation
    if (!email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    // Placeholder for API call to backend
    console.log('Attempting to sign up with:', { email, password });
    setMessage('Sign up successful! Redirecting to sign in...');
    
    // In a real app, you would make an API call here.
    // Example: fetch('/api/signup', { method: 'POST', body: JSON.stringify({ email, password }) })
    // On success, you'd navigate to the sign-in page or the app dashboard.

    // Clear form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
        <div className="auth-page-container">
      <div className="auth-form-container">
        <AuthHeader
          title="Create an Account"
          subtitle="Already have an account?"
          linkText="Sign In"
          linkTo="/"
        />
        <form onSubmit={handleSignUp} className="auth-form">
          <div className="form-field-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="username"
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
          <div className="form-field-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="********"
            />
          </div>
          {message && <p className="error-message">{message}</p>}
          <button
            type="submit"
            className="auth-button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp
