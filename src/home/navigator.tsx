import {useState} from 'react';
import {View} from 'react-native';
import {BottomNavigation, Appbar} from 'react-native-paper';

import {styles} from './interfaces';

import Home from './mahasiswa';
import Profile from './mahasiswa/profile';
import ScanQr from './mahasiswa/scan';

export default function Navbar() {
  const [isScan, setIsScan] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [routes, setRoutes] = useState([
    {key: 'home', title: 'Home', focusedIcon: 'home'},
    {key: 'profile', title: 'Profile', focusedIcon: 'account'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
  });

  const changeIsScan = () => setIsScan(databefore => !databefore);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.backgroundBlue}>
        {isScan ? <Appbar.BackAction onPress={changeIsScan} /> : null}

        <Appbar.Content title="Absensi" />
        
        {index === 0 && isScan === false ? (
          <Appbar.Action icon="qrcode" onPress={changeIsScan} />
        ) : null}
      </Appbar.Header>
      {isScan ? (
        <ScanQr />
      ) : (
        <BottomNavigation
          sceneAnimationEnabled={true}
          sceneAnimationType="shifting"
          barStyle={{backgroundColor: '#007dd6'}}
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      )}
    </View>
  );
}
