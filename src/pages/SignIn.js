import { useState, useContext } from "react";
import AuthHeader from "./AuthHeader";
import './TodosApp.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { api } from "../AuthContext";
// --- Sign-In Component ---
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [upassword, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate()
  const { signin } = useContext(AuthContext);

  const endpoint='signin'

  // Handle the form submission
  const handleSignIn =async (e) => {
    e.preventDefault();
    setMessage('');
     try {
      const { token } = await api.post(endpoint, { username, upassword });
      signin(token);
      navigate('/todo-app');
    } catch (err) {
      setMessage('Authentication failed. Please check your credentials.');
      console.error(err);
    }

    setUsername('');
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
              value={upassword}
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