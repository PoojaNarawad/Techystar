import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import img2 from '../assets/img2';
import img3 from '../assets/img3';
import img4 from '../assets/img4.webp';

const Services = () => {
	return (
		<div>
			<Carousel
				infiniteLoop
				autoPlay
				showStatus={false}
				showArrows={false}
				interval={1000}
				showThumbs={false}
			>
				<div>
					<img src={img2} alt="Item1" />
					<p className="legend">FULL STACK </p>
				</div>
				<div>
					<img src={img3} alt="Item2" />
					<p className="legend">peer-to-peer support </p>
				</div>
				<div>
					<img src={img4} alt="Item3" />
					<p className="legend">web development </p>
				</div>
			</Carousel>
		</div>
	);
};

export default Services;
