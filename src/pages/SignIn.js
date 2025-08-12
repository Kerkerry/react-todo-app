import { useState, useContext } from "react";
import AuthHeader from "./AuthHeader";
import './TodosApp.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
// --- Sign-In Component ---
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate()

  // Handle the form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    setMessage('');
    
    // Simple client-side validation
    if (!email || !password) {
      setMessage('Email and password are required.');
      return;
    }else if (email === 'user' && password === 'password') {
      // login(); // Set authentication status
      navigate('/completed-todos'); // Redirect to dashboard after login
    } else {
      alert('Invalid credentials');
    }

    // Placeholder for API call to backend
    console.log('Attempting to sign in with:', { email, password });
    setMessage('Sign in successful! Redirecting to dashboard...');
    
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