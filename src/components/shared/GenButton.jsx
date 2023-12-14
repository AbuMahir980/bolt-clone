const GenButton = ({text, pt, pr, pb, pl, bg, color, fw, fs}) => {
	return (
		<>
			{/* <input type='submit' value={value} /> */}
			<button
				type="submit"
				className="flex items-center gap-2 font-normal text-sm h-full border rounded-full "
				style={{
					paddingRight: pr,
					paddingTop: pt,
					paddingBottom: pb,
					paddingLeft: pl,
					background: bg,
					color: color,
                    fontWeight: fw,
                    fontSize: fs
				}}
			>
				{text}
			</button>
		</>
	);
};

export default GenButton;
