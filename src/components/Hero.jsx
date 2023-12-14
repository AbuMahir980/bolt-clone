// import hero from '../assets/image/hero.webp'
import Navbar from "./Navbar";
const Hero = () => {
	return (
		<>
			<div>
				<div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
				<div className=" bg-[url('../assets/image/hero.webp')] h-screen bg-cover bg-center"></div>
				<div className="absolute inset-x-0 top-0">
					<Navbar />
				</div>
			</div>
		</>
	);
};

export default Hero;
