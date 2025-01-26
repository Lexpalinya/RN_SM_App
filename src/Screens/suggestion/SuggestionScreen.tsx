import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SuggestionScreen = () => {
  return (
    <View style={styles.stlyesView}>
      <Text>SuggestionScreen</Text>
    </View>
  );
};

export default SuggestionScreen;

const styles = StyleSheet.create({
  stlyesView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
