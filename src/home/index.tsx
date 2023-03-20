import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

// ui
import Scan from './scan';
import Navigation from './Navigation';

export default function Home() {
  const [index, setIndex] = useState(0);

  const [isScan, setIsScan] = useState<boolean>(false);
  const changeIsScan = () => setIsScan(!isScan);

  const conditionMenuScan = !isScan && index === 0;

  return (
    <View style={styles.container}>
      <Appbar.Header elevated id="header">
        {/* kondisi untuk tombol back dari scan qr  */}
        {isScan ? <Appbar.BackAction onPress={changeIsScan} /> : null}

        <Appbar.Content title="Absensi" />

        {/* kondisi untuk membuka tampilan scan qr  */}
        {conditionMenuScan ? (
          <Appbar.Action icon="qrcode" onPress={changeIsScan} />
        ) : null}
      </Appbar.Header>

      {isScan ? <Scan /> : <Navigation index={index} setIndex={setIndex} />}
    </View>
  );
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
