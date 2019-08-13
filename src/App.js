import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import {ProductContext, CartContext} from './contexts/Contexts';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : []);
	
	const addItem = (item) => {
		const tmpCart = [...cart, item];
		localStorage.setItem('shoppingCart', JSON.stringify(tmpCart));
		setCart(tmpCart);
		console.log(tmpCart);
	};
	const removeItem = (itemId) => {
		const tmpCart = cart.filter(item=> item.id!==itemId);
		localStorage.setItem('shoppingCart', JSON.stringify(tmpCart));
		setCart(tmpCart);
	}

	return (
		<div className="App">
			<CartContext.Provider value={{cart,removeItem}}>
			<Navigation/>

			{/* Routes */}
			<ProductContext.Provider value={{ products, addItem}}>
				<Route exact path="/"	component = {Products}/>
			</ProductContext.Provider>

			<Route path="/cart" component = {ShoppingCart} />
			</CartContext.Provider>
		</div>
	);
}

export default App;
