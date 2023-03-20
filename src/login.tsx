import {useContext, useState} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Button, Dialog, Portal, Text, TextInput} from 'react-native-paper';

import {GlobalData} from '../App';
import {datalogin} from '../interfaces/appinterfaces';

export default function Login() {
  const {checkUser} = useContext(GlobalData);

  // kondisi dan pesan sebelum menuju ke tampilan home
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Loading...');

  const [value, setValue] = useState<datalogin>({
    username: '',
    password: '',
  });

  // mengubah data value yang digunakan untuk melakukan pengecekan user
  type key = 'username' | 'password';
  function changeValue(key: key, value: string) {
    setValue(databefore => {
      return {...databefore, [key]: value};
    });
  }

  // melakukan pengecekan apakah username dan password sudah benar
  function login() {
    setMessage('Loading...');
    setIsLoading(true);

    const check = checkUser(value);
    if (!check) setMessage('username atau password salah!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text variant="displaySmall">Login</Text>
        <TextInput
          style={styles.wfull}
          label="Username"
          value={value.username}
          onChangeText={text => changeValue('username', text)}
        />
        <TextInput
          style={styles.wfull}
          label="Password"
          secureTextEntry={true}
          value={value.password}
          onChangeText={text => changeValue('password', text)}
        />
        <Button style={styles.wfull} mode="contained" onPress={login}>
          Login
        </Button>
      </View>

      <Portal>
        <Dialog visible={isLoading} onDismiss={() => setIsLoading(!isLoading)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>{message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsLoading(!isLoading)}>ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  wfull: {
    width: '100%',
  },
});
