import React from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
	const { id } = useParams();

	console.log(id);
	return (
		<div className="px-10 py-10">
			<iframe
				width="100%"
				height="600px"
				src={"https://www.youtube.com/embed/" + id}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
