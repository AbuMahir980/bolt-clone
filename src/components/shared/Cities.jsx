import cities from '../../assets/image/desktop.webp'
import GenButton from './GenButton';

const Cities = () => {
    return (
			<>
				<div className="flex justify-center gap-20">
					<div className="w-[35rem] order-2">
						<img src={cities} alt="" className="rounded-[1.5rem]" />
					</div>
					<div className="flex flex-col justify-start w-[30rem]  self-center order-1">
						<h2 className="font-semibold text-[48px] leading-[56px] text-[#2f313f] mb-5">
							Making cities for people, not cars
						</h2>
						<p className="font-normal text-xl text-[#2f313f]">
							By sharing our knowledge of the industry and real-time data we’re
							helping to improve our cities.
						</p>
						<div className="flex flex-col mt-5">
							<div className="flex text mb-3">
								<div className="pr-3">
									<div className="bg-[#32BB78] rounded-[100%] text-xs px-2 py-1 font-semibold text-white mt-[1.5px]">
										<p>1</p>
									</div>
								</div>
								<div>
									<h6 className=" text-lg font-semibold text-[#2f313f] mb-[1.5px]">
										Sharing best practices
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										We’re able to provide insights that help local authorities
										make their cities more connected and liveable.
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
										One app, many ways to move
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										With multiple transport services inside a single app,
										getting around safely, in a more sustainable way, has never
										been easier.
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
										Less is more
									</h6>
									<p className="text-base font-normal text-[rgba(18,29,43,0.6)]">
										Shared transport can transform our cities by lowering
										emissions, reducing congestion, and the demand for parking
										spaces.
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

export default Cities