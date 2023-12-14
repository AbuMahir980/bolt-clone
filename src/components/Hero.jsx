// import hero from '../assets/image/hero.webp'

const Hero = () => {
	return (
		<>
			<div>
				<div className=" bg-[url('../assets/image/hero.webp')] h-screen bg-cover"></div>
				<div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
			</div>
		</>
	);
};

export default Hero;
