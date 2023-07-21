import { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		console.log('clicked')
		setIsActive((prev) => !prev)
	}

	console.log(isActive)

	return (
		<>
			<nav className='navbar'>
				<h1>
					Ba<span className='green'>chira</span>
				</h1>
				<ul className={`nav-list ${isActive ? 'dropdown' : ''}`}>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Products</a>
					</li>
					<li>
						<a href=''>Categories</a>
					</li>
					<li>
						<a href=''>Brands</a>
					</li>
					<li>
						<a href=''>Pricing</a>
					</li>
				</ul>
				<div
					className='hamburger'
					onClick={handleClick}>
					<FaBars />
				</div>
				<div className='btn-group'>
					<button className='btn-light'>Login</button>
					<button className='btn-dark'>Register</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar
