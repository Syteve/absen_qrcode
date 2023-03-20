import {useContext} from 'react';
import {Linking} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {histori} from '../../interfaces/appinterfaces';
import {GlobalData} from '../../App';

export default function Scan() {
  const {data, addHistori} = useContext(GlobalData);

  /**
   * onSuccess digunakan untuk melakukan
   * 1. pencatatan histori
   * 2. membuka link url dari Qrcode
   */
  function onSuccess(e: any) {
    /**
     * membuat histori data scan qrcode
     */
    const time = new Date();

    const id = data.id;
    const url = e.data;
    const date = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

    const histori: histori = {id, url, date};
    addHistori(histori);

    /**
     * membuka url dari data scan qrcode
     */
    Linking.canOpenURL(e.data).then(supported => {
      if (supported) {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err),
        );
      }
    });
  }

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      showMarker={true}
    />
  );
}
