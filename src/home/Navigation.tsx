import {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

import Home from './Home';
import Profile from './Profile';

interface props {
  index: number;
  setIndex: (index: number) => void;
}

export default function Navigation({index, setIndex}: props) {
  // rute menu di home
  const [routes] = useState([
    {title: 'Home', key: 'home', focusedIcon: 'home'},
    {title: 'Profile', key: 'profile', focusedIcon: 'account'},
  ]);

  // tampilan dari home
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
  });

  return (
    <BottomNavigation
      theme={{dark: true}}
      compact={true}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
