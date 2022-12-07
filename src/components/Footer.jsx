import React from 'react';
import {
	AiFillFacebook,
	AiFillYoutube,
	AiFillInstagram,
	AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer>
			<div>
				<h1>Techystar</h1>
				<p>@all right reserved</p>
			</div>
			<div>
				<h5>Follow Us</h5>
				<div>
					<a href="https://www.facebook.com/" target="blank">
						<AiFillFacebook />
						Facebook
					</a>
					<a href="https://www.instagram.com/" target="blank">
						<AiFillInstagram />
						Instagram
					</a>
					<a href="https://github.com/PoojaNarawad" target="blank">
						<AiFillGithub />
						Github
					</a>
					<a href="https://www.youtube.com/" target="blank">
						<AiFillYoutube />
						Youtube
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
