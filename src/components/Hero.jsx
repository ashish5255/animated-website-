import React, { useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const totalVideos = 4;

  const nextVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
      {/*  z-10 so that this is above other components*/}
      <div
        id="video-frame"
        className="relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75 "
      >
        <div className="">
          <div className=" mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick} className="origin-center">
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className={"size-64 "}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
