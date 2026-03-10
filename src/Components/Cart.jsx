import { useCart } from './Contexts/CartContext';
function Cart() {
    const { cart, itemCount, addItem, removeItem, removeAll, clearCart } = useCart();
    return (
      <section className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h2 className="h5 mb-0">Cart items</h2>
            <span className={`badge ${itemCount ? 'text-bg-success' : 'text-bg-secondary'}`}>{itemCount}</span>
          </div>

          {cart.length === 0 ? (
            <p className="text-body-secondary mb-0">Your cart is empty. Add something from the list.</p>
          ) : (
            <>
              <div className="d-flex justify-content-end mb-2">
                <button className="btn btn-sm btn-outline-danger" onClick={clearCart}>
                  Clear cart
                </button>
              </div>

              <ul className="list-group">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <div className="small text-body-secondary">Qty: {item.qty}</div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => removeItem(item.id)}>
                        -
                      </button>
                      <button className="btn btn-sm btn-primary" onClick={() => addItem(item.id)}>
                        +
                      </button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeAll(item.id)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    );
  }
  
  export default Cart;
