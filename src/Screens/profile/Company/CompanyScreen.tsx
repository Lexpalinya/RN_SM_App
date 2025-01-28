import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../../../utils/components/CustomImage';
import color from '../../../constants/color';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CompanyTab from '../../Recruiting/Company/CompanyTab';
import PostsTab from '../../Recruiting/Post/PostsTab';
const theme = 'light';
const TopTab = createMaterialTopTabNavigator();
interface TopTabListProps {
  title: string;
  component: React.FC<Element>;
}

const TopTabList: TopTabListProps[] = [
  {title: 'ປະກາດຫາພະນັກງານ', component: CompanyTab},
  {title: 'ບໍລິສັດ', component: PostsTab},
];
const tests = () => {
  return <Text>sfsdfsfd</Text>;
};
const CompanyScreen = () => {
  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        <CustomImage
          style={styles.backgroundimage}
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          height={150}
          borderRadius={0}
          resizeMode="cover"
          showFull={true}
        />

        <CustomImage
          source={{
            uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
          }}
          resizeMode="cover"
          showFull={false}
          style={styles.profile}
        />

        <View style={styles.subTitleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            Sesavant company
          </Text>
          <Text style={{paddingBottom: 4}} numberOfLines={1}>
            Julia Pouros Julia Pouros Julia PourosJulia Pouros
          </Text>
          <Text style={styles.address} numberOfLines={1}>
            ນະຄອນຫຼວງວຽງຈັນ, ຈັນທະບູລີ, ດອນແດງ
          </Text>
        </View>
      </View>
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
                    <Text style={[styles.titleTap, focused && styles.titleFocusTap]}>
                      {item.title}
                    </Text>
                  );
                },
              }}
            />
          );
        })}
      </TopTab.Navigator>
    </ScrollView>
  );
};

export default CompanyScreen;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: color[theme].backgroundPage,
  },
  backgroundimage: {
    width: '100%',
    height: 130,
  },
  profile: {
    borderRadius: 100,
    width: 130,
    height: 130,
    marginHorizontal: '50%',
    position: 'absolute',
    top: -70,
    left: -60,
    borderColor: color[theme].backgroundPage,
    borderWidth: 5,
    elevation: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
    height: 100,
  },
  subTitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  titleTap: {
    fontSize: 14,
    color: color[theme].textPrimary,
    fontWeight: 'bold',
  },
  titleFocusTap: {
    fontSize: 16,
    color: color[theme].primary,
    fontWeight: 'bold',
  },
});
