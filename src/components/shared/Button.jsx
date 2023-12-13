const Button = ({logo, text}) => {
    return (
			<>
				{/* <input type='submit' value={value} /> */}
				<button
					type="submit"
					className="flex items-center gap-2 font-normal text-sm h-full "
				>
					<img src={logo} alt="ng" className="w-[20px] border rounded-full" />
					{text}
				</button>
			</>
		);
}

export default Button;