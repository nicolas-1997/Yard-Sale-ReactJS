import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, steState] = useState(initialState);

    const addToCart = (payload) => {
        steState({
            ...state, //... me permite mantener el estado que tenia previamente.
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) =>{
        steState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id ),
        });
    }

    return{
        state, 
        addToCart,
        removeFromCart
    }
}

export default useInitialState; 