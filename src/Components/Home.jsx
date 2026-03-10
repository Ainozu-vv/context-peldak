import React from "react";
import UserProfile from "./UserProfile";
import ThemeButton from "./ThemeButton";
const Home = () => {
  return (
    <main className="container py-4">
      <header className="d-flex align-items-center justify-content-between gap-3 flex-warp mb-3">
        <ThemeButton />
      </header>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <UserProfile />
        </div>
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-body">
              <p className="text-body-secondary mb-2">
                Tipp:jelentkezz be, majd nyisd meg a cart oldalt.
              </p>
              <p className="text-body-secondary mb-0">
                Theme gomb a teljes UI-t átszínezi
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
