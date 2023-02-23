import React from "react";

// Icon Imports
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Search from "./Search";
import ProfileCta from "./ProfileCta";

// Component Header
const Header = ({ showSidebar, setShowSidebar }) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex">
				<div className="mr-4" onClick={() => setShowSidebar(!showSidebar)}>
					<RxHamburgerMenu color={"#fff"} size={"2em"} />
				</div>
				<FaYoutube color={"red"} size={"2em"} />
				<NavLink to="/">
					<h3 className="text-white ml-2 font-bold text-xl">CodeTv.</h3>
				</NavLink>
			</div>
			<Search />

			<ProfileCta
				userProfilePicture={
					"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
				}
			/>
		</div>
	);
};

export default Header;
