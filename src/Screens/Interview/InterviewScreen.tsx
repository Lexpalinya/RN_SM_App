import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InterviewScreen = () => {
  return (
    <View style={styles.stlyesView}>
      <Text>InterviewScreen</Text>
    </View>
  )
}

export default InterviewScreen

const styles = StyleSheet.create({
    stlyesView: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
  });