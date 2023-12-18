import map from '../../assets/image/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg'
import check from '../../assets/image/check.svg'
import globe from '../../assets/image/globe.svg'
import people from '../../assets/image/people.svg'
import GenButton from "./GenButton";

const World = () => {
    return (
			<>
				<div className="flex justify-center flex-col items-center">
					<div>
						<h2 className="text-5xl leading-[56px] font-semibold">À propos</h2>
					</div>
					<div className="py-5">
						<p className="w-[890px] h-[90px] text-center text-xl font-normal text-[#2f313f]">
							Bolt is the first European mobility super-app. We’re making cities
							for people, offering better alternatives for every purpose a
							private car serves — including ride-hailing, shared cars,
							scooters, and food and grocery delivery.
						</p>
					</div>
					<div className="pb-8">
						<img src={map} alt="" className="w-[1136px] h-[578.67px]" />
					</div>
					<div className="flex pb-8">
						<div className="text-center content-center flex flex-col w-[378.66px] h-[102]">
							<img
								src={check}
								alt=""
								className="w-[32px] h-[32px] text-[#1D965C] self-center"
							/>
							<h5 className="w-[213.22px] h-[30px] self-center">
								150+ million
							</h5>
							<p className="w-[213.22px] h-[24px] self-center">
								customers around the world.
							</p>
						</div>
						<div className="text-center content-center flex flex-col w-[378.66px] h-[102]">
							<img
								src={globe}
								alt=""
								className="w-[32px] h-[32px] self-center"
							/>
							<h5 className="w-[213.22px] h-[30px] self-center">
								5 continents
							</h5>
							<p className="w-[213.22px] h-[24px] self-center">
								45+ countries.
							</p>
						</div>
						<div className="text-center content-center flex flex-col w-[378.66px] h-[102]">
							<img
								src={people}
								alt=""
								className="w-[32px] h-[32px] self-center"
							/>
							<h5 className="w-[213.22px] h-[30px] self-center">
								3.1+ million
							</h5>
							<p className="w-[213.22px] h-[24px] self-center">
								drivers and couriers.
							</p>
						</div>
					</div>
					<div>
						<GenButton
							text="More about Bolt"
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
			</>
		);
}

export default World