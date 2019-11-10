import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';

import SafeView from './components/SafeView';
import Title from './components/Title';
import Button, {TextButton} from './components/Button';
import ImageAnimate from './components/ImageAnimate';

import bat from '../assets/bat.json';

const App = () => {
  const [animationPlay, setAnimationPlay] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeView>
        <Title>
          Animation with Lottie {animationPlay ? 'Playing' : 'Stoped'}
        </Title>
        <View style={{width: 400, height: 400}}>
          <ImageAnimate source={bat} loop isPlay={animationPlay} />
        </View>
        <Button>
          <TextButton onPress={() => setAnimationPlay(!animationPlay)}>
            Play
          </TextButton>
        </Button>
      </SafeView>
    </>
  );
};

export default App;
