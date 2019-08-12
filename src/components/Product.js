import React from 'react';

const Product = props => {
	const uId = () => Date.now() + Math.floor(Math.random()*100);
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => {
				let tmp = {...props.product};
				tmp.id = uId();
				props.addItem(tmp);
			}}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
