import React from "react";
import { useLanguage } from "./Contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import {useAuth} from "./Contexts/AuthContext"
const UserProfile = () => {
  const { user, login, logout } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const texts = {
    en: {
      greeting: "Hello",
      login: "Login",
      logout: "Logout",
      switchTo: "Switch to Hungarian",
      viewCart: "View Cart",
    },
    hu: {
      greeting: "Helló",
      login: "Bejelentkezés",
      logout: "Kijelentkezés",
      switchTo: "Váltás angolra",
      viewCart: "Kosár megtekintése",
    },
  };
  return (
    <section className="card">
      <div className="card-body">
        <div>
          <h2 className="h5 mb-1">
            {texts[language].greeting}, {user || "Guest"}
          </h2>
          <p className="text-body-secondary small mb-0">
            {user ? "Signed in" : "Signed out"}
          </p>
        </div>
        <span
          className={`badge ${user ? "text-bg-success" : "text-bg-secondary"}`}
        >
          {user ? "AUTH" : "GUEST"}
        </span>
      </div>

      <div className="d-flex gap-2 flex-wrap">
        <button
          className={`btn ${user ? "btn-outline-danger" : "btn-primary"}`}
          onClick={() => (user ? logout() : login("John Doe"))}
        >
          {user ? texts[language].logout : texts[language].login}
        </button>
        <button className="btn btn-outline-secondary" onClick={toggleLanguage}>
          {texts[language].switchTo}
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/cart")}
        >
          {texts[language].viewCart}
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
