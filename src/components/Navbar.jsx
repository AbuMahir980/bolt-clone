import logo from '../assets/image/bolt.svg'
import ng from '../assets/image/ng.svg'
import down from '../assets/image/down.svg'
import Button from './shared/Button';
const Navbar = () => {
    return (
			<>
				<div className="flex bg-slate-500">
					<img src={logo} alt="Bolt logo" />
					<div className="items-center">
						<Button logo={ng} text="Nigeria(EN)" image={down} />
					</div>
				</div>
			</>
		);
}

export default Navbar;