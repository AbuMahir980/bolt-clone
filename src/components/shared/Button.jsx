const Button = ({logo, text,image }) => {
    return (
			<>
				{/* <input type='submit' value={value} /> */}
				<button
					type="submit"
					className="flex items-center gap-2 font-normal text-sm h-full "
				>
					<img src={logo} alt="ng" className="w-[20px] border rounded-full" />
					{text}
					<img src={image} alt="chevron-down" className="w-[25px] p-0" />
				</button>
			</>
		);
}

export default Button;