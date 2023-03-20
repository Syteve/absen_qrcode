import {useContext, useId} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Divider, Text} from 'react-native-paper';

import {GlobalData} from '../../App';

export default function Home() {
  const {histori, data} = useContext(GlobalData);

  return (
    <View style={styles.container}>
      <Text>Histori</Text>
      <Divider />

      {/* membuat tampilan histori */}
      <FlatList
        data={histori}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          if (item.id !== data.id) return null;

          return (
            <View style={{gap: 5}}>
              <Text>url: {item.url}</Text>
              <Text>date: {item.date}</Text>
              <Divider />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
});
