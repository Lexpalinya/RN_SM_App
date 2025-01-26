import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import HomeAppBar from './components/HomeAppBar';
import HomeImageSlider from './components/HomeImageSlider';
import HomeBody from './components/HomeBody';
import color from '../../constants/color';

const theme="light"
const images = [
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
  'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg'
  , 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg',
  'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-800x525.jpg'
]
const HomeScreen = () => {
  return <View style={styles.stlyesView}>
    <HomeAppBar />
    <ScrollView style={styles.scroll}>
      <HomeImageSlider images={images} />
      <HomeBody />
    </ScrollView>
  </View>;
};

export default HomeScreen;
const styles = StyleSheet.create({
  stlyesView: {
    flex: 1,
   backgroundColor:color[theme].backgroundHomePage
  },
  scroll: {
    flex: 1,
  }
});
