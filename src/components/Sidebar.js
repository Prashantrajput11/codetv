import React from "react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
	console.log({ showSidebar });
	return showSidebar ? (
		<div className="mt-4 bg-amber-500  h-40 w-64">
			<ul>
				<li className="text-white">Home</li>
				<li>Subscriptions</li>
			</ul>
		</div>
	) : null;
};

export default Sidebar;
