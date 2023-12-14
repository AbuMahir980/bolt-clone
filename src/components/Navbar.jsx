import logo from "../assets/image/bolt.svg";
import ng from "../assets/image/ng.svg";
import down from "../assets/image/down.svg";
import hamburger from "../assets/image/hamburger.svg";
import Button from "./shared/Button";
import { useState } from "react";
const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleDropDown = () => {
		setDropDown(!dropDown);
	};
	return (
		<>
			<div className="flex items-center h-16 bg-[#2f313f] justify-center text-center">
				<div className="flex justify-between w-4/5">
					<img src={logo} alt="Bolt logo" className="h-8" />
					<div className="flex place-items-center text-center gap-8 text-[#ffffff]">
						<div className="flex text-center h-full gap-1">
							<img
								src={ng}
								alt="ng"
								className="w-[20px] h-[22px]border rounded-full-white "
							/>
							<Button text="Nigeria(EN)" />
							<img
								src={down}
								alt="chevron-down"
								className="w-[25px] p-0"
								onClick={handleDropDown}
							/>
						</div>
						{/* <div className="">{dropDown ? <></> : ""}</div> */}
						<a href="">Support</a>
						<div>
							<Button text="Sign Up" />
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
