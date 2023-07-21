import { useEffect, useState, createContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import HomePage from '../pages/HomePage'
import ItemPage from '../pages/ItemPage'

const ProductContext = createContext()
function App() {
	const [products, setProducts] = useState({})

	const fetchData = async () => {
		try {
			const URL = `https://fakestoreapi.com/products`
			const response = await axios.get(URL)
			const data = response.data

			if (data !== null) {
				setProducts(data)
			}

			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			{products ? (
				<ProductContext.Provider value={products}>
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
						<Route
							path='/:id'
							element={<ItemPage />}
						/>
					</Routes>
				</ProductContext.Provider>
			) : (
				<p>Loading...</p>
			)}
		</>
	)
}

export default App
export { ProductContext }
