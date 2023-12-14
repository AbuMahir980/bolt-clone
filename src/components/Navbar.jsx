import logo from "../assets/image/bolt.svg";
import ng from "../assets/image/ng.svg";
import down from "../assets/image/down.svg";
import hamburger from "../assets/image/hamburger.svg";
import LangButton from "./shared/LangButton";
import { useState } from "react";
import GenButton from "./shared/GenButton";
const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleDropDown = () => {
		setDropDown(!dropDown);
	};
	return (
		<>
			<div className="flex items-center h-16  justify-center text-center text-sm leading-[20px] font-normal">
				<div className="flex justify-between w-4/5">
					<img src={logo} alt="Bolt logo" className="h-8" />
					<div className="flex place-items-center text-center gap-8 text-[#ffffff]">
						<div className="flex text-center h-full gap-1">
							<LangButton name="Nigeria(EN)" icon={ng} />
							<img
								src={down}
								alt="chevron-down"
								className="w-[25px] p-0"
								onClick={handleDropDown}
							/>
						</div>
						{/* <div className="">{dropDown ? <></> : ""}</div> */}
						<a href="" className="font-medium">Support</a>
						<div>
							<GenButton
								text="Sign Up"
								pt="0.5rem"
								pr="1.25rem"
								pb="0.5rem"
								pl="1.25rem"
								bg="#ffffff"
								color="#2f313f"
								fw="500"
								fs='14px'
							/>
						</div>

						<a href="">
							<img src={hamburger} alt="hamburger" className="w-[25px]" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
