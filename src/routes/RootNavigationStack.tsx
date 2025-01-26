import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/auth/login/LoginScreen';
import RegistorScreen from '../Screens/auth/Registor/RegistorScreen';
import MainApp from '../Screens/MainApp';
import {SafeAreaView} from 'react-native-safe-area-context';
import RecruitingScreen from '../Screens/Recruiting/RecruitingScreen';
import PersonInfoScreen from '../Screens/PersonInfo/PersonInfoScreen';
import FavoriteScreen from '../Screens/Favorite/FavoriteScreen';

export type RootStackParamList = {
  Login: undefined;
  Registor: undefined;
  MainApp: undefined;
  Interview: undefined;
  Recruiting: undefined;
  PersonInfo: undefined;
  Favorite: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigationStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="MainApp">
          {/* Auth */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registor" component={RegistorScreen} />
          <Stack.Screen name="MainApp" component={MainApp} />
          <Stack.Screen name="Recruiting" component={RecruitingScreen} />
          <Stack.Screen name="PersonInfo" component={PersonInfoScreen} />
          <Stack.Screen name="Favorite" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigationStack;

const styles = StyleSheet.create({});
