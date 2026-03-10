import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const CartContext = createContext(undefined);

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const id = action.payload;
      const existing = state.items.find((i) => i.id == id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id == id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { id, name: id, qty: 1 }],
      };
    }
    case "removeOne": {
      const id = action.payload;
      const existing = state.items.find((i) => i.id == id);
      if (!existing) return state;
      return {
        ...state,
        items: state.items.map((i) =>
          i.id == id ? { ...i, qty: i.qty - 1 } : i,
        ),
      };
    }
    case "removeAll":{
        const id =action.payload
        return {...state,items:state.items.filter((i)=>i.id!=id)}
    }
    case "clear":{
        return {...state,items:[]}
    }
    default:
        return state
  }
}

const initialState={items:[]}


function CartProvider({children}){
    const [state,dispatch]=useReducer(cartReducer,initialState)

    const addItem=useCallback((id)=>{
        dispatch({type:"add",payload:id})
    },[])

    const removeItem=useCallback((id)=>{
        dispatch({type:"removeOne",payload:id})
    },[])

    const removeAll=useCallback((id)=>{
        dispatch({type:"removeAll",payload:id})
    },[])

    const clearCart=useCallback(()=>{
        dispatch({type:"clear"})
    },[])

    const itemCount=useMemo(()=>{
        return state.items.reduce((sum,i)=>sum+i.qty,0)
    },[state.items])

    const value=useMemo(()=>({
        cart:state.items,
        itemCount,
        addItem,
        removeItem,
        removeAll,
        clearCart
    }),[state.items,addItem,removeItem,removeAll,clearCart])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export {CartContext,CartProvider}

function useCart(){
    const value=useContext(CartContext)
    if (!value){
        throw new Error("useCart must be used within a CartProvider")
    }
    return value
}
export {useCart}