import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomImage from '../../../utils/components/CustomImage';
import color from '../../../constants/color';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PostTab from './Tab/PostTab';
import {
  FaListAlt,
  IconParkSolidAddWeb,
  LsiconSettingOutline,
} from '../../../../assets/Icon';
import {SvgProps} from 'react-native-svg';
import Setting from './Tab/Settings/Setting';

const theme = 'light';
const Tab = createMaterialTopTabNavigator();

const TabArr = [
  {
    name: 'post',
    component: PostTab,
    icon: FaListAlt,
  },
  // {
  //   name: 'about',
  //   component: PostTab,
  //   icon: FluentBuildingHome24Regular,
  // },
  {
    name: 'setting',
    component: Setting,
    icon: LsiconSettingOutline,
  },
];

const CompanyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomImage
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          style={styles.backgroundImage}
        />
        <CustomImage
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          style={styles.profile}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ບໍລິສັດສຸວັນນີ.</Text>
          <Text style={styles.businessType}>ວັດສະດຸກໍ່ສ້າງ</Text>
          <Text style={styles.address}>ນະຄອນຫຼວງວຽງຈັນ, ຈັນທະບູລີ, ໂພນຕອງ</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: 15,
          right: 15,
          backgroundColor: color.light.primary,
          padding: 12,
          borderRadius: 50,
        }}>
        <IconParkSolidAddWeb width={30} height={30} color={'#ffff'} />
      </TouchableOpacity>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: color[theme].primary,
            height: 2,
          },
        }}>
        {TabArr.map(item => {
          const Icon: React.ComponentType<SvgProps> = item.icon;
          return (
            <Tab.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color}) => {
                  return <Icon width={24} height={30} color={'black'} />;
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

export default CompanyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color[theme].backgroundHomePage,
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: color[theme].backgroundPage,
  },
  backgroundImage: {
    width: '100%',
    height: 130,
    borderRadius: 0,
  },
  profile: {
    position: 'absolute',
    top: -75,
    left: -60,
    width: 120,
    height: 120,
    marginHorizontal: '50%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: color[theme].backgroundPage,
    elevation: 5,
  },
  titleContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  businessType: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: 500,
  },
  address: {},
});
