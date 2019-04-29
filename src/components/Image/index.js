import React from "react";
import "./style.css";

function Image(props) {
	return (
		<div className="img-container">
			<img
				alt={props.name}
				src={props.src}
				key={props.id}
				className="img-thumbnail"
				height="300px"
				width="300px"
				onClick={() => props.guess(props.id)}
			/>
		</div>
	);
};

export default Image;