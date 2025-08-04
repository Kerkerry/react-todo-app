import { NavLink } from "react-router-dom";
import './TodosApp.css'
const AuthHeader = ({ title, subtitle, linkText, linkTo }) => (
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="text-sm text-gray-500 mt-2">
      {subtitle}
      <NavLink
        to={linkTo}
        className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500"
      >
        {linkText}
      </NavLink>
    </p>
  </div>
);

export default AuthHeader