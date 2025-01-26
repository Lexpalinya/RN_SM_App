import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home/HomeScreen';
import SuggestionScreen from './suggestion/SuggestionScreen';
import InterviewScreen from './Interview/InterviewScreen';
import ProfileScreen from './profile/ProfileScreen';
import color from '../constants/color';
import {
  FluentChartPerson24Filled,
  FluentChartPerson24Regular,
  FluentEditPerson24Filled,
  FluentEditPerson24Regular,
  MdiPersonBadge,
  MdiPersonBadgeOutline,
  TablerHome,
  TablerHomeFilled,
} from '../../assets/Icon';
import {SvgProps} from 'react-native-svg';

const roleJobber: boolean = false;
const theme = 'light';

const Tab = createBottomTabNavigator();
const MainApp = () => {
  const TabArr = [
    {
      route: 'Home',
      label: 'ໜ້າຫຼັກ',
      icon: TablerHome,
      iconfocus: TablerHomeFilled,
      compoent: HomeScreen,
    },
    {
      route: 'Suggestion',
      label: 'ແນະນຳ',
      icon: FluentChartPerson24Regular,
      iconfocus: FluentChartPerson24Filled,
      compoent: SuggestionScreen,
    },
    {
      route: 'Interview',
      label: roleJobber ? 'ວຽກທີ່ສະໝັກ' : 'ສຳພາດ',
      icon: MdiPersonBadgeOutline,
      iconfocus: MdiPersonBadge,
      compoent: InterviewScreen,
    },
    {
      route: 'Profile',
      label: roleJobber ? 'ໂປຣໄຟຣ' : 'ບໍລິສັດ',
      icon: FluentEditPerson24Regular,
      iconfocus: FluentEditPerson24Filled,
      compoent: ProfileScreen,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={route => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.compoent}
            options={{
              tabBarShowLabel: false,

              tabBarIcon: ({focused, size}) => {
                const Icon: React.ComponentType<SvgProps> = focused
                  ? item.iconfocus
                  : item.icon;
                return (
                  <View
                    style={[
                      styles.container,
                      focused && styles.containerFocus,
                    ]}>
                    <Icon
                      color={
                        focused
                          ? color[theme].primary
                          : color[theme].textPrimary
                      }
                      width={focused ? 30 : 24}
                      height={focused ? 30 : 24}
                    />
                    <Text style={[styles.label, focused && styles.labelFocus]}>
                      {item.label}
                    </Text>
                  </View>
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopColor: color[theme].containerBorder,
    height: 65,
  },
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    minHeight: 60,
  },
  label: {
    paddingTop: 3,
    fontSize: 12,
    fontWeight: 500,
    color: color[theme].textPrimary,
    minWidth: 60,
    textAlign: 'center',
  },
  labelFocus: {
    color: color[theme].primary,
    fontWeight: 'bold',
  },
  containerFocus: {
    top: -5,
  },
});
