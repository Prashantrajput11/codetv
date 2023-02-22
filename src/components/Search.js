import React from "react";

import { FaMicrophone } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const Search = () => {
	return (
		<div className="flex flex-1 justify-between border-slate-600 border pl-4  mx-60  rounded-full w-96">
			<input
				type="text"
				className="outline-none bg-black text-white"
				placeholder="search"
				// onFocus={}
			/>

			<div className=" flex items-center justify-center ml-4  p-2 bg-zinc-500 rounded-r-full">
				<BsSearch color={"#fff"} size={"1em"} />
			</div>

			{/* <div className=" bg-zinc-700 rounded-full flex items-center justify-center ml-4 hover:bg-zinc-800 p-2">
				<FaMicrophone color={"#fff"} size={"1em"} />
			</div> */}
		</div>
	);
};

export default Search;
