import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import YouTube from "react-youtube";

const Videos = () => {
     const videoIds = [
       "FqtyMQi87J4",
       "8xTOjAInUYc",
       "ZLjprbeWMxQ",
       "E442Dzg8BcE",
     ];
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const onReady = (event) => {
    const player = event.target;

    // Pause the video on mount
    player.pauseVideo();
  };

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const playerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
      <div className="max-w-[1240px] mx-auto">
          <h1 className="text-3xl font-bold text-center my-4">Videos From Our Blog</h1>
      <AnimatePresence>
        <motion.div
          className="flex justify-center"
          key={currentVideoIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
           
            variants={playerVariants}
          >
            <YouTube
              videoId={videoIds[currentVideoIndex]}
              opts={opts}
              onReady={onReady}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className=" flex justify-between gap-3 my-7">
        {videoIds.map((videoId, index) => (
          <div
            key={videoId}
            className={`youtube-thumbnail ${
              index === currentVideoIndex ? "active" : ""
            }`}
            onClick={() => handleVideoClick(index)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={`YouTube Video ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
