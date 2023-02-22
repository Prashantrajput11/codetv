const GOOGLE_API_KEY = "AIzaSyAqa8sCAbBBdcGxZKV3GfVMN3AeXlUisgA";
var query = "react js";
var categoryId = "27";

export const YOUTUBE_VIDEOS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&videoCategoryId=${categoryId}&key=${GOOGLE_API_KEY}`;
