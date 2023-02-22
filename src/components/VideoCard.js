import React from "react";

const VideoCard = ({ videoData }) => {
	console.log({ videoData });
	const { snippet } = videoData;

	const { thumbnails, channelTitle, title } = snippet;
	console.log({ snippet });
	return (
		<div className="mx-1 my-4 ">
			<img
				src={
					thumbnails?.medium?.url ??
					"https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_1280.jpg"
				}
				alt=""
				srcset=""
				className="rounded-lg"
			/>

			<p className="text-white">{channelTitle ?? "Channel name not found"}</p>
			{/* <p className="text-white">{title ?? "Channel name not found"}</p> */}
		</div>
	);
};

export default VideoCard;
