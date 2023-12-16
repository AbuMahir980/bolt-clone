import GenButton from "./GenButton";
import fleet from "../../assets/image/fleet-owner.webp";

const FleetOwner = () => {
	return (
		<>
			<div className="flex justify-center gap-20">
				<div className="w-[35rem]">
					<img src={fleet} alt="" className="rounded-[1.5rem]" />
				</div>
				<div className="flex flex-col justify-start w-[30rem] h-[25rem] self-center ">
					<h2 className="font-bold text-[40px] leading-[48px] text-[#2f313f] mb-5">
						Grow your transport business
					</h2>
					<div className="flex flex-col">
						<div className="flex text mb-3">
							<div className="pr-3">
								<div className="bg-[#32BB78] rounded-[100%] text-xs px-2 py-1 font-semibold text-white mt-[1.5px]">
									<p>1</p>
								</div>
							</div>
							<div>
								<h6 className=" text-lg font-semibold text-[#2f313f] mb-[1.5px]">
									Boost your earnings
								</h6>
								<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
									Our large rider community means more orders per day and higher
									earnings.
								</p>
							</div>
						</div>
						<div className="flex mb-3">
							<div className="pr-3">
								<div className="bg-[#32BB78] rounded-[100%] text-xs px-2 py-1 font-semibold text-white mt-[1.5px]">
									<p>2</p>
								</div>
							</div>
							<div>
								<h6 className="text-lg font-semibold text-[#2f313f] mb-[1.5px]">
									Manage your assets
								</h6>
								<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
									Easily view your vehicles, drivers and their current status.
								</p>
							</div>
						</div>
						<div className="flex mb-3">
							<div className="pr-3">
								<div className="bg-[#32BB78] rounded-[100%] text-xs px-2 py-1 font-semibold text-white mt-[1.5px]">
									<p>3</p>
								</div>
							</div>
							<div>
								<h6 className="text-lg font-semibold text-[#2f313f] mb-[1.5px]">
									Keep track of performance
								</h6>
								<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
									Get easy access to each driver’s completed trips, invoices,
									and payout information.
								</p>
							</div>
						</div>
						<div>
							<GenButton
								text="Learn more"
								fs="16px"
								fw="600"
								bg="#EBEDEF"
								color="#2f313f"
								pr="1.5rem"
								pl="1.5rem"
								pt="1rem"
								pb="1rem"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FleetOwner;
