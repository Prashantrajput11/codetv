import React, { useState } from "react";

const Tab = ({ tabs, defaultTab }) => {
	const [activeTab, setActiveTab] = useState(defaultTab);

	const handleClick = (tab) => {
		setActiveTab(tab.name);
	};
	return (
		<>
			<div className="flex mx-10 border-b-orange-400 border">
				{tabs.map((tab) => (
					<div className="mr-4 px-2 py-4" key={tab.name}>
						<button
							className={`text-white hover:cursor-pointer hover:text-slate-400 ${
								activeTab === tab.name ? "text-slate-400" : ""
							}`}
							onClick={() => handleClick(tab)}
						>
							{tab.name}
						</button>
					</div>
				))}
			</div>

			<div className="tab-content text-white">
				{tabs.find((tab) => tab.name === activeTab).content}
			</div>
		</>
	);
};

export default Tab;
