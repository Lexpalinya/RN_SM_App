import {StyleSheet, View, Text} from 'react-native';
import React, {Component, ComponentType, ElementType} from 'react';
import CustomAppBar from '../../utils/components/CustomAppBar';
import color from '../../constants/color';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CompanyTab from './Company/CompanyTab';
import PostsTab from './Post/PostsTab';
import {SafeAreaView} from 'react-native-safe-area-context';

const theme = 'light';
const TopTab = createMaterialTopTabNavigator();
interface TopTabListProps {
  title: string;
  component: React.FC<Element>;
  // props: any;
}
const TopTabList: TopTabListProps[] = [
  {title: 'ປະກາດຫາພະນັກງານ', component: PostsTab},
  {title: 'ບໍລິສັດ', component: CompanyTab},
];

const RecruitingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <CustomAppBar />
        <TopTab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: {
              backgroundColor: color[theme].primary,
              height: 2,
            },
          }}>
          {TopTabList.map((item, index) => {
            return (
              <TopTab.Screen
                key={index}
                name={item.title}
                component={item.component}
                options={{
                  tabBarLabel: ({focused}) => {
                    return (
                      <Text
                        style={[styles.title, focused && styles.titleFocus]}>
                        {item.title}
                      </Text>
                    );
                  },
                }}
              />
            );
          })}
        </TopTab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default RecruitingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color[theme].backgroundHomePage,
  },
  title: {
    fontSize: 14,
    color: color[theme].textPrimary,
    fontWeight: 'bold',
  },
  titleFocus: {
    fontSize: 16,
    color: color[theme].primary,
    fontWeight: 'bold',
  },
});
