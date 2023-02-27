import {useState} from 'react';
import {View} from 'react-native';
import {BottomNavigation, Appbar, useTheme} from 'react-native-paper';

import {styles} from './interfaces';

import Home from './mahasiswa';
import Profile from './mahasiswa/profile';

export default function Navbar() {
  const theme = useTheme();
  const [index, setIndex] = useState<number>(0);
  const [routes, setRoutes] = useState([
    {key: 'home', title: 'Home', focusedIcon: 'home'},
    {key: 'profile', title: 'Profile', focusedIcon: 'account'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.backgroundBlue}>
        <Appbar.Content title="Absensi" />
        {index === 0 ? <Appbar.Action icon="qrcode" /> : null}
      </Appbar.Header>
      <BottomNavigation
        shifting={true}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
        barStyle={{backgroundColor: '#007dd6'}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}
