import { useState } from "react";
import AuthHeader from "./AuthHeader";
import './TodosApp.css'
import { api } from "./data/api";
// --- Sign-Up Component ---
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle the form submission
  const handleSignUp = async(e) => {
    e.preventDefault();
    try {
    if(username.length>1 || password.length>4 || (password===confirmPassword)){
        const data={
          'username':username,
          'upassword':password
        }
        const response=await api.post('signup',data)
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }else{
        setMessage('Check you details before submitting')
    }
   
    } catch (error) {
      
    }
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
