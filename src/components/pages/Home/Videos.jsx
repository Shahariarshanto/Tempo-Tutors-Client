import { useState } from "react";
import YouTube from "react-youtube";

const Videos = () => {
  const videoIds = ["FqtyMQi87J4", "8xTOjAInUYc", "ZLjprbeWMxQ", "E442Dzg8BcE"];

  const opts =  {

      height:  "180",
      width: "320" ,
      playerVars: {
        autoplay: 0,

  } }

  const [currentVideoId, setCurrentVideoId] = useState(videoIds[0]);

  const handleVideoClick = (videoId) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className="max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">
        Videos From Our Blog
      </h1>
      <div className="flex flex-col items-center my-7 mx-2">
        <div className="w-30">
          <YouTube videoId={currentVideoId} opts={opts} />
        </div>
        <div className="flex justify-between items-center gap-3  mt-4">
          {videoIds.map((videoId) => (
            <div
              key={videoId}
              className={`youtube-thumbnail ${
                videoId === currentVideoId ? "active" : ""
              }`}
              onClick={() => handleVideoClick(videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt={`YouTube Video ${videoId}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
