import map from '../../assets/image/world-map-optimized-6338bdae39fa9d215fb417b5845792a7.svg'
import check from '../../assets/image/check.svg'
const World = () => {
    return (
			<>
				<div>
					<div>
						<h2>À propos</h2>
					</div>
					<div>
						<p>
							Bolt is the first European mobility super-app. We’re making cities
							for people, offering better alternatives for every purpose a
							private car serves — including ride-hailing, shared cars,
							scooters, and food and grocery delivery.
						</p>
					</div>
					<div>
						<img src={map} alt="" />
					</div>
					<div>
						<div>
							<img src={check} alt="" />
							<h5>150+ million</h5>
							<p>customers around the world.</p>
						</div>
						<div>
							<img src={check} alt="" />
							<h5>150+ million</h5>
							<p>customers around the world.</p>
						</div>
						<div>
							<img src={check} alt="" />
							<h5>150+ million</h5>
							<p>customers around the world.</p>
						</div>
					</div>
					<div></div>
				</div>
			</>
		);
}

export default World