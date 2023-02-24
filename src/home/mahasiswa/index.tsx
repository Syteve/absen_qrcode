import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.centerItems}>
      <Button mode="contained">Scan Qrcode</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  centerItems: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
