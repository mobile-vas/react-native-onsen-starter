import About from '../components/About/About.component';
import Detail from '../components/Detail/Detail.component';
import Icon from 'react-native-vector-icons/Foundation';
import React from 'react';
import Setting from '../components/Setting/Setting.component';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

const getRootHomeNavOpt01 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='red' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Detail Nav',
    headerLeft: MenuButton,
    drawerLabel: 'Detail Drawer'
  };
};

const DetailStackNavigator = StackNavigator({
  Detail: {
    screen: Detail,
    navigationOptions: getRootHomeNavOpt01
  }
});

const getRootHomeNavOpt02 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='green' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'About Nav',
    headerLeft: MenuButton,
    drawerLabel: 'About Drawer'
  };
};

const AboutStackNavigator = StackNavigator({
  About: {
    screen: About,
    navigationOptions: getRootHomeNavOpt02
  }
});

const getRootHomeNavOpt03 = ({navigation}) => {
  const onPressMenuButton = () => {
    navigation.navigate('DrawerToggle');
  };
  
  const MenuButton = ( // eslint-disable-next-line
    <Icon.Button name='list' color='blue' iconStyle={{padding: 10}} backgroundColor='transparent' onPress={onPressMenuButton}/>
  );

  return {
    headerTitle: 'Setting Nav',
    headerLeft: MenuButton,
    drawerLabel: 'Setting Drawer'
  };
};

const SettingStackNavigator = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: getRootHomeNavOpt03
  }
});

// ----------

const HomeDrawerNavigator = DrawerNavigator({
  Detail: {
    screen: DetailStackNavigator
  },
  About: {
    screen: AboutStackNavigator
  },
  Setting: {
    screen: SettingStackNavigator
  }
});

export default HomeDrawerNavigator;
