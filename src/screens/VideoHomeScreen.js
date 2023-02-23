import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

import { YOUTUBE_VIDEOS_API } from "../config/config";

const VideoHomeScreen = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const [videoList, setVideoList] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	async function getVideos() {
		const res = await fetch(YOUTUBE_VIDEOS_API);

		const data = await res.json();
		console.log({ data });
		setVideoList(data.items);
	}
	return (
		<div className="p-4">
			<Header />
			<div className="flex ">
				<div className="flex">
					<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
				</div>
				<div className="flex flex-wrap  rounded-full ml-8">
					{videoList &&
						videoList.map((video) => {
							return <VideoCard videoData={video} />;
						})}
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default VideoHomeScreen;
