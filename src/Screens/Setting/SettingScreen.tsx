import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../constants/color';
import CustomImage from '../../utils/components/CustomImage';
import CustomAppBar from '../../utils/components/CustomAppBar';
import CustomInputAuth from '../../utils/components/CustomInput';
import {IconamoonEdit} from '../../../assets/Icon';
const theme = 'light';
const SettingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomAppBar title="ຕັ່ງຄ່າ" />
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
      </View>

      <View style={{marginTop: 100, margin: 15}}>
        <CustomInputAuth
          label="ຊື່ອົງກອນ"
          placeholder="XXXXXX"
          rightIcon={<IconamoonEdit />}
          labelStyle={styles.label}
        />
        <CustomInputAuth
          label="ອີເມວ"
          placeholder="XXXXXX"
          rightIcon={<IconamoonEdit />}
          labelStyle={styles.label}
        />
        <CustomInputAuth
          label="ເບີໂທ"
          placeholder="XXXXXX"
          rightIcon={<IconamoonEdit />}
          labelStyle={styles.label}
        />
        <CustomInputAuth
          label="ລະຫັດຜ່ານ"
          placeholder="XXXXXX"
          rightIcon={<IconamoonEdit />}
          labelStyle={styles.label}
        />
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

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
  label: {
    marginLeft: 10,
  },
});
