import React, {useContext} from 'react';
import AppContex from '../context/AppContext';
import '@styles/OrderItem.scss';

import iconClose from '@icons/icon_close.png'

const OrderItem = ({ product }) => {

	const {removeFromCart} = useContext(AppContex);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img onClick={() => handleRemove(product)} src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
