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
    return{
        state, 
        addToCart
    }
}

export default useInitialState; 