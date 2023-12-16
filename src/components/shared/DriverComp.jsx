import driver from '../../assets/image/driver.webp'
import GenButton from './GenButton';

const Driver = () => {
    return (
			<>
				<div className="flex justify-center gap-20">
					<div className="w-[35rem]">
						<img src={driver} alt="" className="rounded-[1.5rem]" />
					</div>
					<div className="flex flex-col justify-start w-[30rem] h-[25rem] self-center ">
						<h2 className="font-semibold text-[40px] leading-[48px] text-[#2f313f] mb-5">
							Drive and earn money
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
										Drive more, earn more
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										Our 150+ million riders will send you plenty of ride
										requests. When demand is high, you can earn even more.
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
										Set your schedule
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										Drive for as long and as often as you like. Weekdays;
										weekends; evenings — fit driving around your lifestyle.
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
										Get paid each week
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										You’ll receive your earnings at the end of each week — no
										need to wait around for payday.
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
}

export default Driver