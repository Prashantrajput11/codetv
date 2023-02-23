import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Tab from "../components/Tab";
import VideoPlayer from "../components/VideoPlayer";

const SingleVideoScreen = () => {
	const { id } = useParams();

	const tabs = [
		{ name: "Tab1", content: <p>This Tab1.</p> },
		{ name: "Tab2", content: <p>This is the content for Tab2.</p> },
		{ name: "Tab3", content: <p>This is the tab3.</p> },
	];

	return (
		<div className="h-full py-10">
			<Header />
			<VideoPlayer videoId={id} />
			<Tab defaultTab={tabs[0].name} tabs={tabs} />
		</div>
	);
};

export default SingleVideoScreen;
