import React from 'react';
import Header from '../components/Header';
import Img from '../components/Img';
import EmailSent from '../containers/EmailSent';

const Home = () => {
	return (
		<div>
			<Header />
			<Img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
			<Img src="https://www.hola.com/imagenes/estar-bien/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg" alt="Gato" />
		</div>
	);
}

export default Home;
