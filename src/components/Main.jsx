import {
	MdOutlineDeliveryDining,
	MdOutlineHandshake,
	MdAvTimer,
} from 'react-icons/md'
import './Main.css'
import Card from './Card'

const Main = () => {
	return (
		<>
			<section className='landing-div'>
				<div className='landing-left'>
					<h2 className="main-heading																			">
						Best Place to Buy{' '}
						<span className='green'>Everything.</span>
					</h2>
					<p className='sub-heading'>
						At Bachira, you can shop for all your favorite beauty
						brands, clothes, household products and more at a single
						place.
					</p>
					<button className='shopping-btn green'>Shopping Now</button>
				</div>
				<div className='landing-right'>
					<img
						src='/hero_img.svg'
						alt=''
						className='landing-img'
					/>
				</div>
			</section>
			<section className='cta'>
				<h1 className="why-heading">
					Why choose Ba<span className='green'>chira</span>
				</h1>
				<div className='cta-element-div'>
					<div className='cta-element'>
						<MdOutlineDeliveryDining size={64} />
						<h3>Free Delivery</h3>
						<p className='grey'>
							Lorem ipsum dolor sit amet, consectetu adipiscing
							elit, sed do eiusmod tempor
						</p>
					</div>
					<div className='cta-element'>
						<MdOutlineHandshake size={64} />
						<h3>Trusted Platfrom</h3>
						<p className='grey'>
							Lorem ipsum dolor sit amet, consectetu adipiscing
							elit, sed do eiusmod tempor
						</p>
					</div>
					<div className='cta-element'>
						<MdAvTimer size={64} />
						<h3>Here For You</h3>
						<p className='grey'>
							Lorem ipsum dolor sit amet, consectetu adipiscing
							elit, sed do eiusmod tempor
						</p>
					</div>
				</div>
			</section>
			<Card />
		</>
	)
}

export default Main
