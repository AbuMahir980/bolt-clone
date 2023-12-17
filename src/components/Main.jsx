// import Hero from "./Hero"
import { useState } from "react";
// import GenButton from "./shared/GenButton";
import Driver from "./shared/DriverComp";
import Courier from "./shared/CourierComp";
import ShopOwner from "./shared/ShopOwnerComp";
import FleetOwner from "./shared/FleetOwner";
import rides from "../assets/image/rides.png";
import delivery from "../assets/image/delivery.png";
import food from "../assets/image/food.png";
import carSharing from "../assets/image/car-sharing.png";
import micromobility from "../assets/image/micromobility.png";
import business from "../assets/image/business.png";
import Cities from "./shared/Cities";

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

				<div className="w-[1160px] mt-28 px-5">
					<div className="text-center mb-10">
						<h2 className="font-semibold text-5xl leading-[56px] text-[#2f313f]">
							Our services
						</h2>
					</div>
					<div className="flex flex-col gap-5">
						<div className="flex gap-5">
							<div className="flex flex-col w-full h-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="h-[5rem] m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Rides
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[15rem]">
										Request in seconds, ride in minutes
									</p>
								</div>
								<div className="self-end">
									<img src={rides} alt="rides" />
								</div>
							</div>
							<div className="flex flex-col w-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="h-[5rem] m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Delivery
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[10rem]">
										Your favorite food, delivered fast
									</p>
								</div>
								<div className="self-end z-20 mt-[-2px]">
									<img
										src={delivery}
										alt="delivery"
										className="w[200px] h-[84px]"
									/>
								</div>
							</div>
							<div className="flex flex-col w-full h-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Groceries
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[12rem]">
										All the essentials whenever you need them
									</p>
								</div>
								<div className="self-end z-10 mt-[-14px]">
									<img src={food} alt="food" className="w[200px] h-[84px]" />
								</div>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="flex flex-col w-full h-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="h-[5rem] m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Car-Sharing
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[12rem]">
										High-quality car rental made easy
									</p>
								</div>
								<div className="self-end mt-[-20px]">
									<img
										src={carSharing}
										alt="rides"
										className="w[200px] h-[90px]"
									/>
								</div>
							</div>
							<div className="flex flex-col w-full h-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="h-[5rem] m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Micromobility
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[15rem]">
										2-wheel ride rental at your fingertips.
									</p>
								</div>
								<div className="self-end mt-[-11px]">
									<img
										src={micromobility}
										alt="rides"
										className="w[200px] h-[84px]"
									/>
								</div>
							</div>
							<div className="flex flex-col w-full h-full rounded-xl overflow-hidden bg-[#F5F6F7]">
								<div className="h-[5rem] m-5 z-10">
									<h5 className="font-semibold text-2xl text-[#2f313f] mb-3">
										Business
									</h5>
									<p className="font-normal text-base text-[#121d2b99] w-[14rem]">
										Manage business travel for your team and clients
									</p>
								</div>
								<div className="self-end mt-[-11px]">
									<img src={business} alt="rides" />
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className="mt-24">
                    <Cities />
                </div>
			</div>
		</>
	);
};

export default Main;
