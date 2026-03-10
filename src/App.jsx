import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import UserProfile from "./Components/UserProfile";
import { CartProvider } from "./Components/Contexts/CartContext";
import ThemeButton from "./Components/ThemeButton";
import AppProviders from "./Components/Contexts/AppProviders";

function App() {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <CartProvider>
                <main className="container py-4">
                  <header className="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-3">
                    <div>
                      <h1 className="h4 mb-1">Cart</h1>
                      <p className="text-body-secondary small mb-0">
                        Bejelentkezés után tudsz hozzáadni a kosárhoz
                      </p>
                    </div>
                    <ThemeButton />
                  </header>

                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <ProductList />
                    </div>
                    <div className="col-12 col-lg-6">
                      <Cart />
                    </div>
                  </div>
                </main>
              </CartProvider>
            }
          />
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;
