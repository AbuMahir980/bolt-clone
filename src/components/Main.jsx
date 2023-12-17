// import Hero from "./Hero"
import { useState } from "react";
// import GenButton from "./shared/GenButton";
import Driver from "./shared/DriverComp";
import Courier from "./shared/CourierComp";
import ShopOwner from "./shared/ShopOwnerComp";
import FleetOwner from "./shared/FleetOwner";
import Cities from "./shared/Cities";
import Services from "./shared/Services";

const Main = () => {
	const [change, setChange] = useState(0);
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div className="max-w-[100rem] mt-40">
					<div className="mb-5">
						<h2 className="font-bold text-5xl leading-[56px] text-[#2f313f] text-center">
							Earn money with Bolt
						</h2>
					</div>
					<div className="flex justify-center gap-3 my-9">
						<button
							className="px-[1.2rem] py-[0.3rem] text-[#121d2b99] border-2 rounded-full hover:bg-[#EBEDEF]"
							onClick={() => setChange(0)}
						>
							Driver
						</button>
						<button
							className="px-[1.2rem] py-[0.3rem] text-[#121d2b99] border-2 rounded-full hover:bg-[#EBEDEF]"
							onClick={() => setChange(1)}
						>
							Courier
						</button>
						<button
							className="px-[1.2rem] py-[0.3rem] text-[#121d2b99] border-2 rounded-full hover:bg-[#EBEDEF]"
							onClick={() => setChange(2)}
						>
							Restaurant or Shop Owner
						</button>
						<button
							className="px-[1.2rem] py-[0.3rem] text-[#121d2b99] border-2 rounded-full hover:bg-[#EBEDEF]"
							onClick={() => setChange(3)}
						>
							Fleet Owner
						</button>
					</div>
					<div className="px-5">
						{change === 0 ? (
							<Driver />
						) : change === 1 ? (
							<Courier />
						) : change === 2 ? (
							<ShopOwner />
						) : change === 3 ? (
							<FleetOwner />
						) : (
							""
						)}
					</div>
				</div>
                
                <div>
                    <Services />
                </div>
				
                <div className="mt-24">
                    <Cities />
                </div>
			</div>
		</>
	);
};

export default Main;
