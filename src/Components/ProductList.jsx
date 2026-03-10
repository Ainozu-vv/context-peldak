import { useAuth } from './Contexts/AuthContext';
import { useCart } from './Contexts/CartContext';

function ProductList() {
  const { cart, addItem, removeItem } = useCart();
  const { user } = useAuth();
  const products = ['Apple', 'Banana', 'Orange'];
  
  if (!user) {
    return (
      <section className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h2 className="h5 mb-0">Products</h2>
            <span className="badge text-bg-secondary">LOCKED</span>
          </div>
          <p className="text-body-secondary mb-0">Please log in to manage products.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h2 className="h5 mb-0">Products</h2>
          <span className="badge text-bg-success">ACTIVE</span>
        </div>
        <p className="text-body-secondary small mb-3">Simple demo products.</p>

        <ul className="list-group">
          {products.map((product) => {
            const cartItem = cart.find((i) => i.id === product);
            const qty = cartItem?.qty ?? 0;
            return (
              <li key={product} className="list-group-item d-flex align-items-center justify-content-between gap-2 flex-wrap">
                <div>
                  <div className="fw-semibold">{product}</div>
                  <div className="small text-body-secondary">{qty > 0 ? `In cart: ${qty}` : 'Not in cart yet'}</div>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => addItem(product)}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => removeItem(product)}
                    disabled={qty === 0}
                  >
                    Remove
                  </button>
                  <span className={`badge align-self-center ${qty > 0 ? 'text-bg-success' : 'text-bg-secondary'}`}>{qty > 0 ? `Qty ${qty}` : 'Out'}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProductList;
