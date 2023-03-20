import {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Divider, Text} from 'react-native-paper';

import {GlobalData} from '../../App';

export default function Profile() {
  const {logout, data} = useContext(GlobalData);

  /**
   * nama dipisah menjadi array
   * contoh 'tegar bima pratama' menjadi ['tegar', 'bima', 'pratama'] menggunakan split
   * kemudian array tersebut diolah kembali untuk mengambil huruf depan nama menggunakan map
   * contoh ['tegar', 'bima', 'pratama'] menjadi ['t', 'b', 'p']
   * kemudian array tersebut disatukan menggunakan join
   * contoh ['t', 'b', 'p'] menjadi 'tbp'
   * kemudian dirubah ke huruf besar menggunakan toUpperCase
   * contoh 'tbp' menjadi 'TBP'
   */
  const name = data.name
    ?.split(' ')
    .map(value => {
      const getInitial = value.split('')[0];
      return getInitial;
    })
    .join('')
    .toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Text size={48} label={name ? name : 'XD'} />
        <View>
          <Text variant="displaySmall">{data.name}</Text>
          <Text variant="labelSmall">id: {data.id}</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.menuContainer}>
        <Button mode="outlined" onPress={logout}>
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
});
