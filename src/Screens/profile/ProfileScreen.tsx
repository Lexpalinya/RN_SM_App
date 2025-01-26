import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { NavigationContainerProps, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/RootNavigationStack';
import CustomButton from '../../utils/components/CustomButton';

const ProfileScreen = () => {
  const navigation=useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={styles.stlyesView}>
      <Text>ProfileScreen</Text>
     <CustomButton title='LogOut'onPress={()=>navigation.reset({
      index:0,
      routes:[{name:"Login"}]
     })}/>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  stlyesView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
