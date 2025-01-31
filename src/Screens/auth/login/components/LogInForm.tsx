import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import CustomInputAuth from '../../../../utils/components/CustomInput';
import CustomButton from '../../../../utils/components/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../routes/RootNavigationStack';
const LogInForm = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Formik
      initialValues={{phoneNumber: '', password: ''}}
      onSubmit={value => console.log('value', value)}>
      {({}) => (
        <View style={styles.container}>
          <CustomInputAuth label="ເບີໂທ" placeholder="20XXXXXXXX" />
          <CustomInputAuth label="ລະຫັດຜ່ານ" placeholder="XXXXXX" />
         <CustomButton onPress={()=>{navigation.reset({
           index:0,
           routes:[{name:"MainApp"}]
         })}} title='ເຂົ້າສູ່ລະບົບ'/>
        </View>
      )}
    </Formik>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
    
  },
});
