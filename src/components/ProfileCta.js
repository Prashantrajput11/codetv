import React from "react";

const ProfileCta = ({ userProfilePicture }) => {
	return (
		<div>
			<img
				src={userProfilePicture}
				alt="user picture"
				className="h-10 w-10 rounded-full "
			/>
		</div>
	);
};

export default ProfileCta;
