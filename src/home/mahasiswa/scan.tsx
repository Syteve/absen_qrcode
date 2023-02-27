import {Appbar} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

export default function ScanQr() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Scan QrCode" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
