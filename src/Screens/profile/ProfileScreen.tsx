import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/RootNavigationStack';
import CompanyScreen from './Company/CompanyScreen';
import JobberScree from './Jobber/JobberScree';
const role: string = 'company';
const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>{role === 'company' ? <CompanyScreen /> : <JobberScree />}</View>
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
