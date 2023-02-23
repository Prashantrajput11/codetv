import logo from "./logo.svg";
import "./App.css";
import VideoHomeScreen from "./screens/VideoHomeScreen";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SingleVideoScreen from "./screens/SingleVideoScreen";
import Header from "./components/Header";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <VideoHomeScreen />,
	},
	{
		path: "/videos/:id",
		element: <SingleVideoScreen />,
	},
]);

function App() {
	return (
		<div className="App bg-black">
			{/* <Header /> */}
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
