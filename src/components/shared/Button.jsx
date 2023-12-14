const Button = ({text}) => {
    return (
			<>
				{/* <input type='submit' value={value} /> */}
				<button
					type="submit"
					className="flex items-center gap-2 font-normal text-sm h-full "
				>
					{text}
				</button>
			</>
		);
}

export default Button;