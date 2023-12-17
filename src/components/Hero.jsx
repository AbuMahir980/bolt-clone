// import hero from '../assets/image/hero.webp'
import Navbar from "./Navbar";
import GenButton from "./shared/GenButton";
const Hero = () => {
	return (
		<>
			<div>
				<div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
				<div className=" bg-[url('../assets/image/hero.webp')] h-screen bg-cover bg-center"></div>
				<div className="absolute inset-x-0 top-0">
					<Navbar />
				</div>
				<div className="flex justify-center max-w-7xl mx-24 absolute top-24 h-[75%]">
					<div className=" items-end px-5 py-5">
						<div className="w-2/4 h-[98%] py-6">
							<h1 className="mb-7 mt-5 text-[64px] text-[#ffffff] font-bold leading-[72px]">
								Go wherever, whenever
							</h1>
							<p className="mb-7 text-[20px] leading-[28px] font-normal text-[#ffffff]">
								Bolt is the all-in-one mobility app. Get picked up by a
								top-rated driver in minutes and enjoy a comfortable ride to
								wherever you’re going; or skip the traffic entirely on one of
								our industry-leading scooters.
							</p>
							<div>
								<GenButton
									text="Get the app"
									pt="0.9rem"
									pr="1.8rem"
									pb="0.9rem"
									pl="1.8rem"
									bg="#1D965C"
									color="#ffffff"
									fw="600"
									fs="16px"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
