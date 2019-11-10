import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';

const ImageAnimate = ({
  source,
  isPlay = false,
  autoPlay = false,
  loop = true,
  speed,
}) => {
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    if (isPlay && lottie !== null) {
      lottie.play();
    }

    if (!isPlay && lottie !== null) {
      lottie.reset();
    }
  }, [isPlay, lottie]);

  return (
    <LottieView
      ref={animation => setLottie(animation)}
      source={source}
      resizeMode="contain"
      autoPlay={autoPlay}
      speed={speed}
      loop={loop}
    />
  );
};

export default ImageAnimate;
