/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import './Card.css'
import { ProductContext } from '../App'

const Card = () => {
	const products = useContext(ProductContext)

	const productsArray = Object.values(products)
		.filter((product) => product.category === "men's clothing")
		.splice(0, 3)

	console.log(productsArray)

	return (
		<>
			<h2>Popular Products</h2>
			<section className='cards-list'>
				{productsArray.map((product) => {
					return (
						<div className='card-wrapper'>
							<article className='card'>
								<div className='card-img'>
									<img
										src={product.image}
										alt=''
									/>
								</div>
								<div className='card-stats'>
									<h3 className='product-title'>
										{product.title}
									</h3>
									<p className='product-price'>{`$${product.price}`}</p>
								</div>
							</article>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Card
