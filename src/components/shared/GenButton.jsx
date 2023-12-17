const GenButton = ({ text, pt, pr, pb, pl, bg, color, fw, fs, border }) => {
	return (
		<>
			{/* <input type='submit' value={value} /> */}
			<button
				type="submit"
				className="flex items-center gap-2 font-normal text-sm h-full border border-none rounded-full "
				style={{
					paddingRight: pr,
					paddingTop: pt,
					paddingBottom: pb,
					paddingLeft: pl,
					background: bg,
					color: color,
					fontWeight: fw,
					fontSize: fs,
					border: border,
				}}
			>
				{text}
			</button>
		</>
	);
};

export default GenButton;
