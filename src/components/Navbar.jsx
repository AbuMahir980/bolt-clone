import logo from "../assets/image/bolt.svg";
import ng from "../assets/image/ng.svg";
import down from "../assets/image/down.svg";
import Button from "./shared/Button";
import { useState } from "react";
const Navbar = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleDropDown = () => {
		setDropDown(!dropDown);
	};
	return (
		<>
			<div className="flex bg-slate-500">
				<img src={logo} alt="Bolt logo" />
				<div>
					<div className=" items-center">
						<div className="flex">
							<Button logo={ng} text="Nigeria(EN)" />
							<img
								src={down}
								alt="chevron-down"
								className="w-[25px] p-0 text-white"
								onClick={handleDropDown}
							/>
						</div>
						<div className="">
							{dropDown ? (
								<div>
									{" "}
									<select name="" id="">
										<option value="english">Ghana</option>
									</select>{" "}
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
