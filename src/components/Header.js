import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", JSON.stringify(true));
      setIsAuth(true);
      window.location.reload();
    });
  };

  const handleSignOut = () => {
    signOut(auth);
    localStorage.setItem("isAuth", JSON.stringify(false));
    setIsAuth(false);
    window.location.reload();
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>The Blogging Beacon</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleSignOut} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
