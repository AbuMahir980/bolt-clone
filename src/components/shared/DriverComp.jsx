import driver from '../../assets/image/driver.webp'

const Driver = () => {
    return (
			<>
				<div className="flex justify-center gap-20">
					<div className="w-[35rem] border ">
						<img src={driver} alt="" className="rounded-[1.5rem]" />
					</div>
					<div className="flex flex-col justify-start w-[30rem] h-[25rem] self-center">
						<h2 className="font-semibold text-[40px] leading-[48px] text-[#2f313f] ">
							Drive and earn money
						</h2>
						<div className="flex">
							<div>
								<p>1</p>
							</div>
							<div>
								<h6>Drive more, earn more</h6>
								<p>
									Our 150+ million riders will send you plenty of ride requests.
									When demand is high, you can earn even more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default Driver