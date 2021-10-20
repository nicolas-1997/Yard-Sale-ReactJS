import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContex from '../context/AppContext';
import '@styles/MyOrder.scss';

import flechita from '@icons/flechita.svg'

const MyOrder = () => {
	const {state} = useContext(AppContex);
	
	function sumTotal(){
		const reducer = (acumulador, currentvalue) => acumulador + currentvalue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
