const LangButton = ({icon, name}) => {
    return (
			<>
				{/* <input type='submit' value={value} /> */}
				<button
					type="submit"
					className="flex items-center gap-2 font-normal text-sm h-full "
				>
					<img
						src={icon}
						alt="ng"
						className="w-[20px] h-[22px]border rounded-full-white "
					/>
					{name}
				</button>
			</>
		);
}

export default LangButton;