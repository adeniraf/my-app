import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
	return (
		<section className='footer'>
			<h2>
				Ba<span className='green'>chira</span>
			</h2>
			<p>Copyright © 2023 Bachira, Inc</p>
			<ul className='footer-list'>
				<li>
					<Link to='/'>Legal Stuff</Link>
				</li>
				<li>
					<Link to='/'>Privacy Policy</Link>
				</li>
				<li>
					<Link to='/'>Security</Link>
				</li>
			</ul>
		</section>
	)
}

export default Footer
