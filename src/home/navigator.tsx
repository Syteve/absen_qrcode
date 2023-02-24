import React from 'react';
import {View} from 'react-native';
import {BottomNavigation, Appbar} from 'react-native-paper';

import {props, styles} from './interfaces';

export default function Navbar({route, render}: props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(route);
  const renderScene = BottomNavigation.SceneMap(render);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.backgroundBlue}>
        <Appbar.Content title="Absensi" />
        {index === 0 ? <Appbar.Action icon="qrcode" /> : null}
      </Appbar.Header>
      <BottomNavigation
        activeColor="white"
        inactiveColor="gray"
        barStyle={{backgroundColor: 'skyblue'}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}
